import React from "react";

interface QuestionCardProps {
  question: string;
  children?: React.ReactNode;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, children }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <div className="font-semibold mb-2">{question}</div>
    {children}
  </div>
);

export default QuestionCard;
