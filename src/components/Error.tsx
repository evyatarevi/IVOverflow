import { ErrorContainer, ErrorText } from "./styledComponents/Error.style";

const Error = ({ message }: { message: string }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};

export default Error;
