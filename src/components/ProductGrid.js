// ProductCard
// Paginator

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.js";
import Paginator from "./Paginator.js";
import "./ProductGrid.css";

function ProductGrid({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    axios.get(`https:fakestoreapi.com/products`).then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchQuery]);
  // productos filtrados
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="product-grid">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Paginator
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductGrid;
