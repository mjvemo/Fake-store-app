//CANTIDAD PRODUCTOS
import React from "react";
import "./Pagination.css";

function Pagination({ totalProducts, productsPerPage, setCurrentPage }) {
  // redondea al mayor
  const pages = Math.ceil(totalProducts / productsPerPage);

  // genera la cantidad de botones(cards) que necesite. "_" = una funcion ( no se esta utilizando)
  return (
    <div className="pagination">
      {[...Array(pages)].map((_, index) => (
        <button key={index} onClick={() => setCurrentPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
