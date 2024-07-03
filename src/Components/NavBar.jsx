import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate('');
  return (
    <div>
      <nav className="flex place-content-between bg-black">
        <div className="m-5">
          <ul className="flex text-white">
            <li
              className="p-5 cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            >
              HOME
            </li>
            <li
              className="p-5 cursor-pointer"
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h1 className="flex text-white p-5 text-3xl">PhoneX</h1>
        </div>
        <div className="m-5">
          <ul className="flex bg-black text-white">
            <span
              className="material-symbols-outlined  p-5 cursor-pointer"
              onClick={() => {
                navigate("/search");
              }}
            >
              Search
            </span>
            <span
              className="material-symbols-outlined p-5 cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              shopping_cart
            </span>
            <span
              className="material-symbols-outlined p-5 cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              person
            </span>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
