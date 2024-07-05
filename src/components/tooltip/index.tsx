import React, { useState } from "react";
import "./style.css";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(2);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="tooltip-label">{children}</span>
      <div
        className={`tooltip ${
          isHovered === 1
            ? "tooltip-hover"
            : isHovered === 2
            ? "tooltip-hoverout"
            : ""
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
