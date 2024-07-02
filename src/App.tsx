import Input from "./components/input";
import Button from "./components/button";
import Card from "./components/card";
import Tab from "./components/tab";
import TreeMenu from "./components/tree";
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
      label: 'Parent 1',
      children: [
        {
          label: 'Child 1',
          children: [
            { label: 'Grandchild 1' },
            { label: 'Grandchild 2' },
          ],
        },
        {
          label: 'Child 2',
          children: [
            { label: 'Grandchild 3' },
            { label: 'Grandchild 4' },
          ],
        },
      ],
    },
    {
      label: 'Parent 2',
      children: [
        { label: 'Child 3' },
        { label: 'Child 4' },
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
      </div>
    </div>
  );
}

export default App;
