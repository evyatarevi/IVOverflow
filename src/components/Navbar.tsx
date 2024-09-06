import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import {
  LogoutButton,
  NavItems,
  NavLink,
  NavbarContainer,
} from "./styledComponents/Navbar.style";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <NavbarContainer>
      <NavItems>
        <NavLink href="/app">Home</NavLink>
      </NavItems>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;
