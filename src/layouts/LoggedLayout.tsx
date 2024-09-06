import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navbar } from "../components/index.ts";
import { populateQuestions } from "../store/questionsSlice";

import { getQuestions } from "../services/questionApi";

const LoggedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const questionsData = await getQuestions();
        if (questionsData) {
          dispatch(populateQuestions(questionsData));
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestionsData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LoggedLayout;
