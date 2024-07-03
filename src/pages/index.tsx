import { Route, Routes } from "react-router-dom";
import InputPage from "./input";
import ButtonPage from "./button";
import CardPage from "./card";
import TabsPage from "./tabs";
import TooltipPage from "./tooltip";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/input"  element={<InputPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/card"   element={<CardPage />} />
        <Route path="/tabs"   element={<TabsPage />} />
        <Route path="/tooltip"   element={<TooltipPage />} />
      </Routes>
    </div>
  );
}
