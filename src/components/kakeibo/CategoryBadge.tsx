
interface CategoryBadgeProps {
  label: string;
  color?: string;
}

export default function CategoryBadge({ label, color = "bg-blue-100 text-blue-800" }: CategoryBadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
      {label}
    </span>
  );
}
