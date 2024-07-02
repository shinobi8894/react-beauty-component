import Input from "./components/input";
import Button from "./components/button";
import Card from "./components/card";
import Tab from "./components/tab";
import TreeMenu from "./components/tree";
import Tooltip from "./components/tooltip";
import "./App.css";
import "./reset.css";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];

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
      <div>
        <Input />
        <Button />
        <Card />
        <Tab tabs={tabs} />

        <Tooltip text="This is a tooltip!">
          Hover me
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
