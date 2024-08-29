import { useNavigate } from "react-router-dom";
import {
  Container,
  Message,
  BackButton,
} from "../components/styledComponents/NotFoundPage.styled";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Message>404 - Page Not Found</Message>
      <BackButton onClick={() => navigate("/app")}>Go to Home</BackButton>
    </Container>
  );
}
