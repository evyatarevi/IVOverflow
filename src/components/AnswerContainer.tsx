import { AnswerCard } from "../components/index";
import {
  AnswerList,
  AnswerContainer,
} from "./styledComponents/QuestionPage.style";

const AnswersContainer = ({ question }: any) => {
  return (
    <AnswerContainer>
      <h3>Answers:</h3>
      <AnswerList>
        {question.answers.map((answer: any) => (
          <AnswerCard answer={answer} key={answer.id} />
        ))}
      </AnswerList>
    </AnswerContainer>
  );
};

export default AnswersContainer;
