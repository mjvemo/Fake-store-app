import React, { useState } from "react";
import "./Header.css";

function Header({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    // alimentando con info
    const query = e.target.value;
    setSearch(query);
    onSearch(query); //pasando lo que digitamos al App.js
  };

  return (
    <header className="header">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar Productos"
      />
    </header>
  );
}

export default Header;
