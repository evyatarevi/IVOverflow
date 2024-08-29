import { createBrowserRouter } from "react-router-dom";
import LoggedLayout from "../layouts/LoggedLayout.tsx";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  QuestionPage,
} from "../pages/index.ts";

export default createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/app",
    element: <LoggedLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "QuestionPage/:id",
        element: <QuestionPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
