import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Card";
import { NotFound } from "./components/design1/NotFound";
import { NavBar } from "./components/NavBar";
import { CardStar } from "./components/design2/CardStar";

function App() {
  // Solo JS
  //<Card />
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/design1" element={<NotFound />} />
          <Route path="/design2" element={<CardStar />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
