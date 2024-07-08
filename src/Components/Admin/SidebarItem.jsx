import React from "react";

function SidebarItem({ title, icon, onClick }) {
  return (
    <div className="p-4 hover:bg-gray-200 cursor-pointer flex items-center" onClick={onClick}>
      <span className="text-2xl mr-4">{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default SidebarItem;
