import React, { useState } from "react";

const CartItem = () => {
  
  const [itemCount, setItemCount] = useState(false);
  
  return (
    <div className="flex items-center justify-between border-b py-4">
      <img
        src="https://via.placeholder.com/50"
        alt="Item"
        className="w-16 h-16 object-cover"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-sm font-semibold">
          boAt Rockerz 450 DC edition ...
        </h2>
        <div className="flex items-center mt-2">
          <button className="px-2 py-1 border">-</button>
          <span className="px-4">1</span>
          <button className="px-2 py-1 border">+</button>
        </div>
        <p className="text-sm mt-1">1 x ₹1999</p>
      </div>
      <button className="ml-4 text-red-500">×</button>
    </div>
  );
};

export default CartItem;
