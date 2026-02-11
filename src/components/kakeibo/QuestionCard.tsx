
interface QuestionCardProps {
  question: string;
  children?: React.ReactNode;
}

export default function QuestionCard({ question, children }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="font-semibold mb-2">{question}</div>
      {children}
    </div>
  );
}
