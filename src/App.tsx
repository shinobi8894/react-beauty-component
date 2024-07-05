import { BrowserRouter as Router } from "react-router-dom";
import TreeMenu from "./components/tree";
import Pages from "./pages";
import "./App.css";
import "./reset.css";
import Snippet from "./components/snippet";

function App() {
  const treeData = [
    {
      label: "Styles",
      link: "styles",
    },
    {
      label: "Components",
      link: "#",
      children: [
        {
          label: "Input",
          link: "input",
        },
        {
          label: "Tabs",
          link: "tabs",
        },
        {
          label: "Button",
          link: "button",
        },
        {
          label: "Card",
          link: "card",
        },
        {
          label: "Tooltip",
          link: "tooltip",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <Router>
        <TreeMenu data={treeData} />
        <Pages />
      </Router>
      <Snippet/>
    </div>
  );
}

export default App;
