import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import {
  LogoutButton,
  NavItems,
  NavLink,
  NavbarContainer,
} from "./styledComponents/Navbar.style";
import Button from "./styledComponents/Button.style.ts";
import { useState } from "react";
import { QuestionForm } from "./index.ts";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [displayQuestionForm, setDisplayQuestionForm] =
    useState<boolean>(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <NavbarContainer>
        <NavItems>
          <NavLink onClick={() => navigate("/app")}>Home</NavLink>
        </NavItems>
        <div>
          <Button onClick={() => setDisplayQuestionForm(true)}>
            Add Question
          </Button>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </div>
      </NavbarContainer>
      {displayQuestionForm && (
        <QuestionForm setDisplayQuestionForm={setDisplayQuestionForm} />
      )}
    </>
  );
};

export default Navbar;
