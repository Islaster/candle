import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Success from "./views/success";
import { useState } from "react";
import Landing from "./views/Landing";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Cancel from "./views/cancel";
import CartProvider from "./components/CartContext";
import { Container } from "react-bootstrap";

function App() {
  const [salesman, setSalesman] = useState("");
  const [buyer, setBuyer] = useState("");
  const [product, setProduct] = useState({
    candle: [],
  });
  const navigate = useNavigate();
  return (
    <div className="App">
      <CartProvider>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route
              path="/"
              element={
                <Landing setSalesman={setSalesman} navigate={navigate} />
              }
            />
            <Route
              path="/product"
              element={<Home setProduct={setProduct} setBuyer={setBuyer} />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
