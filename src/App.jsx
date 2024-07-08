// src/App.jsx

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AdminNavBar from "./Components/Admin/AdminNavBar";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavBar /> : <NavBar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
