import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Shop from "./pages/Shop.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import Shipping from "./pages/Shipping.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
