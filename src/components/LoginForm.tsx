import { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  StyledForm,
} from "./styledComponents/LoginForm.styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = () => {
    // check if email and password valid
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
    </StyledForm>
  );
};

export default LoginForm;
