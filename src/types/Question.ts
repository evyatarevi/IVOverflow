export interface Answer {
  id: string;
  author: string;
  date: string;
  content: string;
  votes: number;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  answers: Answer[];
}
