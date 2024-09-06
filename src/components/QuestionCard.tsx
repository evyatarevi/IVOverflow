import {
  Card,
  TagContainer,
  AuthorContainer,
  Title,
  Content,
  StatsContainer,
  CardDetails,
} from "./styledComponents/QuestionCard.styles";
import { Tag } from "./styledComponents/Tag.styles";
import { VoteAnswerIndicator } from "./index";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ question }: any) => {
  const navigate = useNavigate();
  const votesSum = question.answers.reduce(
    (acc: number, answer: any) => (acc += answer.votes),
    0
  );
  return (
    <Card onClick={() => navigate(`QuestionPage/${question.id}`)}>
      <StatsContainer>
        <VoteAnswerIndicator count={votesSum} type={"Votes"} />
        <VoteAnswerIndicator count={question.answers.length} type={"Answers"} />
      </StatsContainer>
      <CardDetails>
        <Title>{question.title}</Title>
        <Content>{question.content}</Content>
        <TagContainer>
          {question.tags.map((tagName: any, index: number) => {
            return <Tag key={index}>{tagName}</Tag>;
          })}
        </TagContainer>
        <AuthorContainer justifycontent={"flex-end"}>
          <div>
            <p>Asked {question.date}</p>
            <p>by {question.author}</p>
          </div>
        </AuthorContainer>
      </CardDetails>
    </Card>
  );
};

export default QuestionCard;
