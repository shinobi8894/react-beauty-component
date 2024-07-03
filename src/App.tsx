import { BrowserRouter as Router } from "react-router-dom";
import TreeMenu from "./components/tree";
import Pages from "./pages";
import "./App.css";
import "./reset.css";

function App() {
  const treeData = [
    {
      label: "Components",
      children: [
        {
          label: "Input",
        },
        {
          label: "Tabs",
        },
        {
          label: "Button",
        },
        {
          label: "Card",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <TreeMenu data={treeData} />
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
