import Home from "./Pages/Home";
import Shopnow from "./Pages/Shopnow";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import Cart from "./Components/Cart";
import React, { useState, useEffect } from "react";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Sale";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";







 
function App() {
  
  return (
   <div>
       

    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path="/Shopnow" element={<Shopnow/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Shop" element={<Shop/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
   


    
    </Routes>

    </div>
  );
}

export default App;
