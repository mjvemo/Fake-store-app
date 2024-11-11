import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="image">
          <img src={product.image} alt={product.tittle}></img>
        </div>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
