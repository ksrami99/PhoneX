import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
