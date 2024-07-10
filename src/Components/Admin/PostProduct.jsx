import React, { useState } from "react";

function PostProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Post Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Image</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-2 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Select Product Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Category</option>
              {/* Add your category options here */}
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostProduct;
