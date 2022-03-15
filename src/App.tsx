import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Circle from "./Page/Circle";
import Form from "./Page/Form";
import Home from "./Page/Home";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circle" element={<Circle />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
