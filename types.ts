
export interface Question {
  id: number;
  axis: string;
  content: string; // Unificado: Contexto + Enunciado em negrito
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: keyof Question['options'];
  optionExplanations: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, keyof Question['options']>;
  isFinished: boolean;
  score: number;
}
