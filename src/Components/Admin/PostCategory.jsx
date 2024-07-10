import React, { useState } from "react";

function PostCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Post Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Category Image</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-2 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
              required
            />
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

export default PostCategory;
