import React from "react";
import ProductCategory from "./Product/ProductCategory";
import NewsLetter from "./NewsLetter";
import ProductCard from "./Product/ProductCard";

const categories = [
  { name: "earbuds", image: "../../assets/category/cat-1.jpg" },
  { name: "headphones", image: "../../assets/category/cat-2.jpg" },
  { name: "earbuds", image: "../../assets/category/cat-3.jpg" },
  { name: "earbuds", image: "../../assets/category/cat-4.jpg" },
];

const products = [
  {
    id: 1,
    title: "boAt Rockerz 450 DC edition",
    price: 1999,
    image: "../../assets/products/earbuds-prod-1.webp",
    category: "headphones",
    details: "Product details here...",
    relatedProducts: [
      { id: 2, title: "Related Product 1", image: "../../assets/products/earbuds-prod-2.webp" },
      { id: 3, title: "Related Product 2", image: "../../assets/products/earbuds-prod-3.webp" },
    ],
  },
];

function Home() {
  return (
    <div>
      <div className="flex flex-wrap bg-purple-900">
        <div className="h-screen flex flex-col justify-center place-items-center w-1/2 min-w-min">
          <h1 className="text-9xl/10 leading-normal text-white">PhoneX</h1>
          <p className="text-white leading-normal text-2xl text-center m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            <br />
            vel qui perspiciatis sapiente! Unde, molestias. Lorem ipsum dolor
            sit amet.
          </p>
          <div className="flex">
            <button
              type="read-more"
              className="text-white border-white border-2 m-5 font-medium rounded-lg text-sm px-4 py-2 "
            >
              READ MORE
            </button>
            <button
              type="read-more"
              className="text-black bg-white border-2 m-5 font-medium rounded-lg text-sm px-4 py-2 "
            >
              READ MORE
            </button>
          </div>
        </div>
        <div className="h-screen flex justify-center place-items-center w-1/2 min-w-min">
          <img src="../../assets/products/earbuds-prod-1.webp" alt="" />
        </div>
      </div>

      <div className="flex">
        {categories.map((category) => (
          <ProductCategory key={category.name} imagSrc={category.image} category={category.name} />
        ))}
      </div>

      <div>
        <h1 className="text-black leading-normal text-4xl m-5">
          POPULAR PRODUCTS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <NewsLetter />
    </div>
  );
}

export default Home;
