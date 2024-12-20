import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams(); // Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // llamar a las paginas de manera independiente
    axios
      .get(`https:fakestoreapi.com/products/${id}`)
      // le asigno respuesta del API a setProduct();
      .then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Cargando Productos...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.tittle} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
