import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Answer {
  id: string;
  author: string;
  date: string;
  content: string;
  votes: number;
}

interface Question {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  answers: Answer[];
}

interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    // action: PayloadAction<Question[]>
    populateQuestions(state, action) {
      state.questions = action.payload;
    },
    addAnswer(
      state,
      action: PayloadAction<{ questionId: string; answer: Answer }>
    ) {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.answers.push(answer);
      }
    },
  },
});

export const { populateQuestions, addAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
