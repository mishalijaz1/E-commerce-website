import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React, { useState } from "react";
import "./amazon.css";
import Paragraph from "./Paragraph";


//amazon
const Products = ({handleClick}) => {
 
  return (
    <div>

    <Paragraph/>
    <section>
     
      {popularProducts .map((item) => (
        <Product key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
      </div>
  );
};

export default Products;