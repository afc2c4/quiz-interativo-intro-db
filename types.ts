
export interface Question {
  id: number;
  context: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: keyof Question['options'];
  axis: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, keyof Question['options']>;
  isFinished: boolean;
  score: number;
}
