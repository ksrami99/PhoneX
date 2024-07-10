// src/Components/Product/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-gray-50 flex flex-col justify-center place-items-center w-1/4 p-4 m-2 rounded-lg shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <p className="bg-white text-black p-4 text-center">
          {product.title}
          <br />
          {product.price}
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
