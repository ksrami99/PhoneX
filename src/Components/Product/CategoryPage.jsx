import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const categories = {
  headphones: [
    {
      id: 1,
      title: "boAt Rockerz 450 DC edition",
      price: 1999,
      image: "../../assets/products/headphones-prod-1.webp",
      details: "Product details here...",
      relatedProducts: [
        { id: 2, title: "Related Product 1", image: "../../assets/products/related-prod-1.webp" },
        { id: 3, title: "Related Product 2", image: "../../assets/products/related-prod-2.webp" },
      ],
    },
  ],
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = categories[category];

  if (!products) {
    return <div>Category not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl mb-6 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
