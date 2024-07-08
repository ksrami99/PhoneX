import React from "react";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-full bg-white shadow-lg">
      <SidebarItem title="User List" icon="👥" onClick={() => navigate('/admin/userlist')} />
      <SidebarItem title="Post Product" icon="🛍️" onClick={() => navigate('/admin/postproduct')} />
      <SidebarItem title="Post Category" icon="📂" onClick={() => navigate('/admin/postcategory')} />
      <SidebarItem title="Manage Orders" icon="📦" onClick={() => navigate('/admin/manageorders')} />
    </div>
  );
}

export default Sidebar;
