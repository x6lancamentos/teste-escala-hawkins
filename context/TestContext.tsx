"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UserResult {
  name: string;
  email: string;
  whatsapp: string;
  totalScore: number;
  levelName: string;
  frequency: number;
  category: string;
}

interface TestContextType {
  answers: Record<number, number>;
  setAnswer: (questionId: number, value: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  userResult: UserResult | null;
  setUserResult: (result: UserResult | null) => void;
  resetTest: () => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResult, setUserResult] = useState<UserResult | null>(null);

  const setAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setUserResult(null);
  };

  return (
    <TestContext.Provider
      value={{
        answers,
        setAnswer,
        currentQuestion,
        setCurrentQuestion,
        userResult,
        setUserResult,
        resetTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTest must be used within TestProvider");
  }
  return context;
}
