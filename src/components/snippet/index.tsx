import { useState } from "react";
import Icon from "../icon";
import "./style.css";

interface IconClasses {
  [key: string]: {
    [key: number]: string;
  };
}

const ICON_CLASSES: IconClasses = {
  doubleCheck: {
    0: "icons opacity-0",
    1: "animate-fade-in icons",
    2: "animate-fade-out icons",
  },
  copy: {
    0: "icons",
    1: "animate-fade-out icons",
    2: "animate-fade-in icons",
  },
};

export default function Snippet() {
  const [copied, setCopied] = useState<number>(0);

  const handleCopy = () => {
    const snippetText = "Snippet";
    navigator.clipboard.writeText(snippetText);
    setCopied(1);
    setTimeout(() => setCopied(2), 1500);
  };

  return (
    <div className="snippet">
      <div>Snippet</div>
      <div className="actions">
        <Icon
          icon={"doubleCheck"}
          className={ICON_CLASSES.doubleCheck[copied]}
        />
        <Icon
          icon={"copy"}
          className={ICON_CLASSES.copy[copied]}
          onClick={handleCopy}
        />
      </div>
    </div>
  );
}
