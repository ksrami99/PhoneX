import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Profile from "./Components/Profile.jsx";
import Search from "./Components/Search.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import Admin from "./Components/Admin.jsx";
import UserList from "./Components/Admin/UserList.jsx";
import CategoryPage from "./Components/Product/CategoryPage.jsx";
import ProductDetails from "./Components/Product/ProductDetails.jsx";
import PostProduct from "./Components/Admin/PostProduct.jsx";
import PostCategory from "./Components/Admin/PostCategory.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="postproduct" element={<PostProduct />} />
        <Route path="postcategory" element={<PostCategory />} />
      </Route>
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
