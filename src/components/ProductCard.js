import React from "react";
import { Link } from "react-router-dom";

import "./ProductDetail.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.tittle}></img>
        <h3>{product.tittle}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
