import React, { useState } from "react";
import "./style.css";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="tooltip-label">{children}</span>
      <div
        className={`tooltip ${
          isHovered ? "tooltip-hover" : "tooltip-hoverout"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
