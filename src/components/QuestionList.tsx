import { QuestionCard } from "./index";

const QuestionList = ({ questions }: any) => {
  return (
    <>
      {questions.map((question: any) => {
        return <QuestionCard question={question} key={question.id} />;
      })}
    </>
  );
};

export default QuestionList;
