import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chart from "./Page/Chart";
import Circle from "./Page/Circle";
import Coin from "./Page/Coin";
import Coins from "./Page/Coins";
import Form from "./Page/Form";
import Home from "./Page/Home";
import Price from "./Page/Price";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circle" element={<Circle />} />
      <Route path="/form" element={<Form />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/:coinId" element={<Coin />} >
        <Route path="price" element={<Price />} />
        <Route path="chart" element={<Chart />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router