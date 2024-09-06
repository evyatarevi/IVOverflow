// QuestionForm.tsx
import React, { useState } from "react";
import {
  Button,
  FormContainer,
  FormField,
  FormTitle,
  Input,
  Label,
  TextArea,
  ModalContainer,
} from "./styledComponents/QuestionForm.style";

interface QuestionFormProps {
  setDisplayQuestionForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const QuestionForm = ({ setDisplayQuestionForm }: QuestionFormProps) => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, question, tag });
  };

  return (
    <ModalContainer>
      <FormContainer>
        <FormTitle>Ask a Question</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="question">Question</Label>
            <TextArea
              id="question"
              rows={4}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="tag">Tag</Label>
            <Input
              type="text"
              id="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </FormField>
          <Button type="submit" color="#007bff">
            Submit
          </Button>
          <Button
            type="button"
            color="#f44336"
            onClick={() => setDisplayQuestionForm(false)}
          >
            Cancel
          </Button>
        </form>
      </FormContainer>
    </ModalContainer>
  );
};

export default QuestionForm;
