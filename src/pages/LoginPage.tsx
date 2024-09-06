import styled from "styled-components";
import { LoginForm } from "../components/index";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; // or any color you prefer
  padding: 20px;
`;

const LoginPage = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default LoginPage;
