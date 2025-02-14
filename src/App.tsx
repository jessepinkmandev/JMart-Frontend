import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import ProductDetails from "./pages/ProductDetails";
import { get_category } from "./store/reducers/homeReducer";
import CategoryShop from "./pages/CategoryShop";
import SearchProducts from "./components/SearchProducts";
import Payment from "./pages/Payment";
import UserDashboard from "./pages/UserDashboard";
import Indexx from "./components/Dashboard/Indexx";
import ProtectedRoutes from "./utilities/ProtectedRoutes";
import Orders from "./components/Dashboard/Orders";
import ChangePassword from "./components/Dashboard/ChangePassword";
import Wishlist from "./components/Dashboard/Wishlist";
import OrderDetails from "./components/Dashboard/OrderDetails";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route path="" element={<UserDashboard />}>
            <Route path="" element={<Indexx />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="my-wishlist" element={<Wishlist />} />
            <Route path="order/details/:orderId" element={<OrderDetails />} />
          </Route>
        </Route>

        <Route path="/products?" element={<CategoryShop />} />
        <Route path="/product/details/:id" element={<ProductDetails />} />
        <Route path="/products/search?" element={<SearchProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
