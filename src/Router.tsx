import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animations from "./Page/Animations";
import Animation2 from "./Page/Animations2";
import Animations3 from "./Page/Animations3";
import Chart from "./Page/Chart";
import Circle from "./Page/Circle";
import Coin from "./Page/Coin";
import Coins from "./Page/Coins";
import Form from "./Page/Form";
import Home from "./Page/Home";
import Price from "./Page/Price";
import ToDoList from "./Page/ToDoList";
import Trello from "./Page/Trello";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/form" element={<Form />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/trello" element={<Trello />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/animations2" element={<Animation2 />} />
        <Route path="/animations3" element={<Animations3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
