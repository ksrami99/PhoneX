import React, { useState, useEffect } from "react";

function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const data = [
        { id: 1, customer: "John Doe", total: 100, status: "Pending" },
        { id: 2, customer: "Jane Smith", total: 150, status: "Shipped" },
        // Add more orders as needed
      ];
      setOrders(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="bg-gray-200 p-2 text-left block md:table-cell">
              Order ID
            </th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">
              Customer
            </th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">
              Total
            </th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="bg-white border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 block md:table-cell">{order.id}</td>
              <td className="p-2 block md:table-cell">{order.customer}</td>
              <td className="p-2 block md:table-cell">${order.total}</td>
              <td className="p-2 block md:table-cell">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;
