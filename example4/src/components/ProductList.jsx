// src/components/ProductList.js

import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <center>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </center>
    </div>
  );
};

export default ProductList;
