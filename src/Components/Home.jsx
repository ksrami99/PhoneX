import React from "react";
import ProductCategory from "./Product/ProductCategory";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import ProductCard from "./Product/ProductCard";

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
              class="text-black bg-white border-2 m-5 font-medium rounded-lg text-sm px-4 py-2 "
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
        <ProductCategory imagSrc="../../assets/category/cat-1.jpg" />
        <ProductCategory imagSrc="../../assets/category/cat-2.jpg" />
        <ProductCategory imagSrc="../../assets/category/cat-3.jpg" />
        <ProductCategory imagSrc="../../assets/category/cat-4.jpg" />
      </div>

      <div>
        <h1 className="text-black leading-normal text-4xl m-5">
          POPULAR PRODUCTS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center my-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
