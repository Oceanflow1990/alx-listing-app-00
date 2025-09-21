import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition"
    >
      {label}
    </button>
  );
};

export default Pill;
