// src/Components/Product/ProductDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
    price: "₹1999",
    details: "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that...",
    category: "HEADPHONES",
    image: "../../assets/products/earbuds-prod-1.webp",
    relatedProducts: [
      {
        id: 2,
        title: "boAt Rockerz 518 Wireless Headphone",
        image: "../../assets/products/earbuds-prod-2.webp",
      },
      {
        id: 3,
        title: "Rockerz 550 Over Ear Bluetooth Headphone",
        image: "../../assets/products/earbuds-prod-3.webp",
      },
      {
        id: 4,
        title: "boAt Wave Neo",
        image: "../../assets/products/earbuds-prod-4.webp",
      }
    ]
  }
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-8 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">Price: {product.price}</p>
          <p className="text-gray-700 mb-4">{product.details}</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg mb-4">Add to Cart</button>
          <p className="text-gray-700">Category: {product.category}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <img className="w-full h-32 object-cover mb-2" src={relatedProduct.image} alt={relatedProduct.title} />
              <p className="text-gray-800">{relatedProduct.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
