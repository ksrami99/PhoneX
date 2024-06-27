import React from "react";

function Search() {
  return (
    <form class="max-w-md mx-auto">
      
      <div class="relative m-10">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <span class="material-symbols-outlined">
          search
          </span>
        </div>
        <input
          type="search"
          id="search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg "
          placeholder="SEARCH FOR PRODUCTS"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
