import { VotesIndicator } from "./index";
import {
  AuthorContainer,
  Content,
} from "./styledComponents/QuestionCard.styles";
import {
  AnswerDetails,
  AnswerCardStyle,
} from "./styledComponents/AnswerCard.style";

interface Answer {
  id: string;
  author: string;
  content: string;
  date: string;
  votes: number;
}

const AnswerCard = ({ answer }: any) => {
  return (
    <AnswerCardStyle>
      <AnswerDetails>
        <VotesIndicator votes={answer.votes} />
        <Content>{answer.content}</Content>
      </AnswerDetails>

      <AuthorContainer justifycontent={"flex-end"}>
        <div>
          <p>Answered {answer.date}</p>
          <p>by {answer.author}</p>
        </div>
      </AuthorContainer>
    </AnswerCardStyle>
  );
};

export default AnswerCard;
