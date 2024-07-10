import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";

function Admin() {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

export default Admin;
