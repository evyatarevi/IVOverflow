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

// import { useDispatch } from "react-redux";
// import { addAnswer } from "./questionsSlice";

// const AddAnswerForm: React.FC<{ questionId: number }> = ({ questionId }) => {
//   const dispatch = useDispatch();

//   const handleAddAnswer = () => {
//     const newAnswer = {
//       id: Date.now(),
//       author: "Author Name",
//       date: new Date().toISOString(),
//       content: "This is an answer",
//     };
//     dispatch(addAnswer({ questionId, answer: newAnswer }));
//   };

//   return <button onClick={handleAddAnswer}>Add Answer</button>;
// };
