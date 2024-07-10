// src/Components/Product/ProductDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "boAt Rockerz 450 DC edition",
    price: 1999,
    image: "../../../assets/products/earbuds-prod-1.webp",
    details: "Product details here...",
    relatedProducts: [
      {
        id: 2,
        title: "Related Product 1",
        image: "../../../assets/products/earbuds-prod-2.webp",
      },
      {
        id: 3,
        title: "Related Product 2",
        image: "../../../assets/products/earbuds-prod-3.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Related Product 1",
    price: 999,
    image: "../../../assets/products/earbuds-prod-2.webp",
    details: "Details for related product 1...",
    relatedProducts: [
      {
        id: 1,
        title: "boAt Rockerz 450 DC edition",
        image: "../../../assets/products/earbuds-prod-1.webp",
      },
      {
        id: 3,
        title: "Related Product 2",
        image: "../../../assets/products/earbuds-prod-3.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Related Product 2",
    price: 1499,
    image: "../../../assets/products/earbuds-prod-3.webp",
    details: "Details for related product 2...",
    relatedProducts: [
      {
        id: 1,
        title: "boAt Rockerz 450 DC edition",
        image: "../../../assets/products/earbuds-prod-1.webp",
      },
      {
        id: 2,
        title: "Related Product 1",
        image: "../../../assets/products/earbuds-prod-2.webp",
      },
    ],
  },
  // Add more products here
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleRelatedProductClick = (relatedProductId) => {
    navigate(`/product/${relatedProductId}`);
  };

  return (
    <div className="p-20">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-8 lg:w-1/2">
          <h1 className="text-4xl font-bold m-4 mb-10">{product.title}</h1>
          <p className="text-2xl text-gray-800 m-4 mb-10">
            Price: {product.price}
          </p>
          <p className="text-xl text-gray-800 m-4 mb-10">{product.details}</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-20 mb-8 mx-4">
            Add to Cart
          </button>
          <hr />
          <p className="text-gray-800 text-xl m-4">
            Category: {product.category}
          </p>
        </div>
      </div>
      <div className="m-20">
        <h2 className="text-4xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="cursor-pointer"
              onClick={() => handleRelatedProductClick(relatedProduct.id)}
            >
              <img
                src={relatedProduct.image}
                alt={relatedProduct.title}
                className="mb-2"
              />
              <p>{relatedProduct.title}</p>
              <p className="text-gray-800">{relatedProduct.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
