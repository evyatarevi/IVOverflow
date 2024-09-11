import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { QuestionList } from "../components/index";

const HomePage = () => {
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  );
};

export default HomePage;
