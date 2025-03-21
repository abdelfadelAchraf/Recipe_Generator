import React from "react";

interface ButtonProps {
  text: string;
  className?: string; // Made className optional with "?"
  style?: React.CSSProperties; // Added support for inline styles
}

const Button: React.FC<ButtonProps> = ({ text, className = "", style }) => {
  return (
    <button
      className={`py-3 px-4 cursor-pointer hover:bg-gray-700 transition-all duration-300 bg-red-400 rounded-full text-white hover:shadow-2xl shadow-red-400 ${className}`}
      style={style} 
    >
      {text}
    </button>
  );
};

export default Button;
