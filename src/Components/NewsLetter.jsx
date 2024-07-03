import React from "react";

function NewsLetter() {
  return (
    <div>
      <div className="bg-[url('/assets/newsletter-bg.jpeg')]  bg-cover h-screen flex items-center justify-center">
        <div>
          <h1 className="text-xl leading-normal text-black text-center p-5">
            NEWSLETTER
          </h1>
          <h3 className="text-xl leading-normal text-black text-center p-5">
            SIGN UP FOR LATEST UPDATES AND OFFERS
          </h3>
          <form className="max-w-md mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Subscribe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <span className="material-symbols-outlined"></span>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Email Address"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Subscribe
              </button>
            </div>
          </form>
          <h4 className="text-xl leading-normal text-black text-center p-5">
            Will be used in accordance with our Privacy Policy
          </h4>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
