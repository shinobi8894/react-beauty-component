import Input from "./components/input";
import Button from "./components/button";
import Card from "./components/card";
import Tab from "./components/tab";
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

  return (
    <div className="app">
      <Input />
      <Button />
      <Card />
      <Tab tabs={tabs} />
    </div>
  );
}

export default App;
