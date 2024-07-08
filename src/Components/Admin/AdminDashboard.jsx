import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
