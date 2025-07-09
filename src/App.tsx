import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
