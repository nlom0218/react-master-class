import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Circle from "./Page/Circle";
import Coin from "./Page/Coin";
import Coins from "./Page/Coins";
import Form from "./Page/Form";
import Home from "./Page/Home";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circle" element={<Circle />} />
      <Route path="/form" element={<Form />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/:coinId" element={<Coin />} />
    </Routes>
  </BrowserRouter>
}

export default Router