import React from "react";

function Home() {
  return (
    <div className="bg-purple-800">
      <div className="flex">
        <div className="h-screen flex flex-col justify-center place-items-center w-screen">
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
              class="text-white border-white border-2 m-5 font-medium rounded-lg text-sm px-4 py-2 "
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
        <div className="h-screen flex justify-center place-items-center w-screen">
          <div>
            <img src="../../assets/products/earbuds-prod-1.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
