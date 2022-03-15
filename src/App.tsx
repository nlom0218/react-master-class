import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Circle from "./Page/Circle";
import Home from "./Page/Home";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circle" element={<Circle />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
