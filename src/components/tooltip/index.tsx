import React from "react";
import "./style.css";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div>
      <span className="tooltip-label">{children}</span>
      <div className="tooltip">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Tooltip;
