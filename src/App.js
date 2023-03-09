
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <div>
       
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
