import { useState } from "react";
import { Box, Button, TextBox } from "./styledComponents/AnswerForm.style";

interface AnswerFormProps {
  handleAddAnswer: (content: string) => void;
}

const AnswerForm = ({ handleAddAnswer }: AnswerFormProps) => {
  const [answerContent, setAnswerContent] = useState("");

  return (
    <Box>
      <TextBox
        placeholder="Type answer here"
        value={answerContent}
        onChange={(e) => setAnswerContent(e.target.value)}
      />
      <Button
        onClick={() => {
          handleAddAnswer(answerContent);
          setAnswerContent("");
        }}
      >
        Answer
      </Button>
    </Box>
  );
};

export default AnswerForm;
