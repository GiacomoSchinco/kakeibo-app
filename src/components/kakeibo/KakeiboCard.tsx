import React from "react";

interface KakeiboCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const KakeiboCard: React.FC<KakeiboCardProps> = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
    {icon && <div className="text-2xl">{icon}</div>}
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  </div>
);

export default KakeiboCard;
