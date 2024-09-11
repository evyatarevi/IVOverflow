import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import _ from "lodash";
import {
  Title,
  AuthorContainer,
  TagContainer,
} from "../components/styledComponents/QuestionCard.styles";
import { Tag } from "../components/styledComponents/Tag.styles";
import { AnswersContainer } from "../components/index";
import {
  QuestionPageStyle,
  AnswerHeader,
} from "../components/styledComponents/QuestionPage.style";
import AnswerForm from "../components/AnswerForm";
import NotFoundPage from "./NotFoundPage.tsx";
import { addAnswer } from "../store/questionsSlice.ts";
import { generateUniqueId } from "../utility/generateUniqueId.ts";
import { setQuestions } from "../services/questionApi.ts";

const QuestionPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );
  if (!questions.length) {
    return;
  }

  const questionIndex = questions.findIndex((question) => question.id === id);
  if (!id || questionIndex === -1) return <NotFoundPage />;
  const question = questions[questionIndex];

  const handleAddAnswer = async (answerContent: string) => {
    const newAnswer = {
      id: generateUniqueId(),
      author: "Current User",
      date: new Date().toISOString().slice(0, 10),
      content: answerContent,
      votes: 0,
    };

    const clonedQuestions = _.cloneDeep(questions);
    clonedQuestions[questionIndex].answers.push(newAnswer);

    try {
      await setQuestions(clonedQuestions);
      dispatch(addAnswer({ questionId: id, answer: newAnswer }));
    } catch (error) {
      console.log("Failed to save the answer", error);
    }
  };

  return (
    <QuestionPageStyle>
      <AnswerHeader>
        <Title>{question?.title}</Title>
        <AuthorContainer>
          Asked {question?.date} by {question?.author}
        </AuthorContainer>
      </AnswerHeader>
      <div>{question?.content}</div>
      <TagContainer>
        {question?.tags.map((tagName: any, index: number) => {
          return <Tag key={index}>{tagName}</Tag>;
        })}
      </TagContainer>
      <AnswersContainer question={question} />
      <AnswerForm handleAddAnswer={handleAddAnswer} />
    </QuestionPageStyle>
  );
};

export default QuestionPage;
