import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Loading } from "../components/index.ts";
import { populateQuestions } from "../store/questionsSlice";

import { getQuestions } from "../services/questionApi";

const LoggedLayout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const questionsData = await getQuestions();
        if (questionsData) {
          dispatch(populateQuestions(questionsData));
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setIsLoading(false);
      }
    };

    fetchQuestionsData();
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LoggedLayout;
