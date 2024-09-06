import { useState } from "react";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Error } from "./index";
import {
  Button,
  FormGroup,
  Input,
  Label,
  StyledForm,
} from "./styledComponents/LoginForm.styles";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("evi@evi.com");
  const [password, setPassword] = useState<string>("123456");
  const [error, setError] = useState<string | null>(null);

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in:", userCredential.user);
      navigate("/app");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <StyledForm onSubmit={handleForm}>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <Button>Login</Button>
      {error && <Error message={error} />}
    </StyledForm>
  );
};

export default LoginForm;
