import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage/ProductPage";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
// import MainPage from "../components/HomePage/MainPage";
import Splitscree from "../admin/adminhome";
import SplitScreen from "../admin/adminlogin";
import Adminaddpro from "../admin/adminaddpro";
import Adminallproducts from "../admin/adminallproducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/Checkout/CheckOut";
import Search from "../pages/Search/Search";

// landing fix

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adminlogin" element={<SplitScreen />} />
      <Route path="/Orders" element={<Splitscree />} />
      <Route path="/Add Products" element={<Adminaddpro />} />
      <Route path="/adminallprod" element={<Adminallproducts />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default AllRoutes;
