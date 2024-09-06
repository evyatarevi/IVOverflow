// StyledButton.tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  padding: 16px;

  &:hover {
    color: #007bff;
  }
`;

export default StyledButton;
