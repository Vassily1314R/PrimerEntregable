import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/design4/Card";
import { NotFound } from "./components/design1/NotFound";
import { NavBar } from "./components/NavBar";
import { CardStar } from "./components/design2/CardStar";
import { CardProduct } from "./components/design3/CardProduct";
import { EjCebolla } from "./components/design5/EjCebolla";
import { ErZoologicos } from "./components/design6/ErZoologicos";

function App() {
  // Solo JS
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/design1" element={<NotFound />} />
          <Route path="/design2" element={<CardStar />} />
          <Route path="/design3" element={<CardProduct />} />
          <Route path="/design4" element={<Card />} />
          <Route path="/design5" element={<EjCebolla />} />
          <Route path="/design6" element={<ErZoologicos />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
