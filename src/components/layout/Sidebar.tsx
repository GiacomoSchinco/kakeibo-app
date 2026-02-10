import React from "react";

const Sidebar: React.FC = () => (
  <aside className="h-full w-60 bg-gray-50 p-4 border-r">
    <nav>
      <ul className="space-y-2">
        <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/example" className="hover:underline">Example</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
