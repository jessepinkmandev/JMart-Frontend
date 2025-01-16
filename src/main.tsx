import React, { Suspense } from "react";
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
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense>
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
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              background: "#283046",
              color: "white",
            },
          }}
        />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
