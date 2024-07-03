import React, { useState } from "react";
import Icon from "../icon";
import { Link } from "react-router-dom";
import "./style.css";

interface TreeNodeProps {
  label: string;
  link: string;
  children?: TreeNodeProps[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Link to={link ? link : "/"} className="tree-node">
      <div className="node-label" onClick={handleToggle}>
        {label}
        <span className={`expand-icon ${isOpen ? "rotate" : ""}`}>
          {Array.isArray(children) && children.length > 0 && (
            <Icon icon={"arrow-left"} />
          )}
        </span>
      </div>
      <div className={`children-container ${isOpen ? "open" : ""}`}>
        {Array.isArray(children) && children.length > 0 && (
          <div>
            {children.map((child, index) => (
              <TreeNode key={index} {...child} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

const TreeMenu: React.FC<{ data: TreeNodeProps[] }> = ({ data }) => {
  return (
    <div className="tree-menu">
      {data.map((node, index) => (
        <TreeNode key={index} {...node} />
      ))}
    </div>
  );
};

export default TreeMenu;
