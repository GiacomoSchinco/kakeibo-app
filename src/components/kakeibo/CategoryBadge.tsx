import React from "react";

interface CategoryBadgeProps {
  label: string;
  color?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ label, color = "bg-blue-100 text-blue-800" }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
    {label}
  </span>
);

export default CategoryBadge;
