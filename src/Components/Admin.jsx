import React from "react";

function Admin() {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-gray-200 flex flex-col">
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <a className="block py-2 px-3 rounded bg-gray-700 hover:bg-gray-600">
            Dashboard
          </a>
          <a className="block py-2 px-3 rounded hover:bg-gray-600">Users</a>
          <a className="block py-2 px-3 rounded hover:bg-gray-600">Settings</a>
          <a className="block py-2 px-3 rounded hover:bg-gray-600">Reports</a>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a className="block py-2 px-3 rounded bg-red-500 hover:bg-red-400 text-white text-center">
            Logout
          </a>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="mt-2 text-3xl">1,234</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Sales</h2>
            <p className="mt-2 text-3xl">$12,345</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">New Signups</h2>
            <p className="mt-2 text-3xl">123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
