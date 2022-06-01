import React, { Component } from 'react';
import './App.css';
// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Home from "./pages/home/home";
import DetailProduct from "./pages/product/DetailProduct";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from "./services/PrivateRoute";
import Navbar  from "./components/navbar/Navbar";
import Login from "./pages/account/login";
import Footer from "./components/footer/footer"
import Shop from "./pages/shop/shop"
import Register from "./pages/account/register"
import Cart from "./pages/shop/cart"
import Checkout from "./pages/shop/checkout"
import { CartProvider } from 'react-use-cart';
import Profile from "./pages/account/profile"

function App() {
  return (
    /* <Home/> */

    <div className="App">
      <CartProvider>

      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:productid" element={<DetailProduct/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      <Footer/>
      </CartProvider>
    </div>
  );
}


export default App;
