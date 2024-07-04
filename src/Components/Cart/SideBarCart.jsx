import React from "react";
import CartItem from "./CartItem";

const SidebarCart = ({ isOpen, toggleCart }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCart}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white text-black shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 bg-white border-b p-4">
          <h1 className="text-xl font-semibold">SHOPPING CART</h1>
          <button className="text-lg font-semibold" onClick={toggleCart}>
            CLOSE
          </button>
        </div>
        <div className="p-4">
          <CartItem />
          {/* Add more <CartItem /> components as needed */}
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-white border-t">
          <div className="flex justify-between text-lg font-semibold">
            <span>SUBTOTAL:</span>
            <span>₹1999</span>
          </div>
          <button className="w-full mt-4 py-2 bg-purple-500 text-white font-semibold hover:bg-purple-700 rounded">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;
