import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const data = [
        { id: 1, firstName: 'rutvik', lastName: 'patel', email: 'abc123@gmail.com' },
        { id: 2, firstName: 'rutvik', lastName: 'patel', email: 'abcd123@gmail.com' },
        { id: 3, firstName: 'jatin', lastName: 'patel', email: 'jatinpatel2519@gmail.com' },
        { id: 4, firstName: 'zalodiya', lastName: 'jatin', email: 'jatin@gmail.com' },
        { id: 5, firstName: 'Raj', lastName: 'Patel', email: 'raj123@gmail.com' },
        { id: 6, firstName: 'dev', lastName: 'vaja', email: 'devvaja56@gmail.com' },
        { id: 7, firstName: 'Michael', lastName: 'Jackson', email: 'michael.2055@gmail.com' },
        { id: 8, firstName: 'Jainam', lastName: 'Darji', email: 'jainam@gmail.com' },
        { id: 9, firstName: 'nirav', lastName: 'patel', email: 'nirav123@gmail.com' }
      ];
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="bg-gray-200 p-2 text-left block md:table-cell">No.</th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">FirstName</th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">LastName</th>
            <th className="bg-gray-200 p-2 text-left block md:table-cell">Email</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {users.map((user, index) => (
            <tr key={user.id} className="bg-white border border-gray-300 md:border-none block md:table-row">
              <td className="p-2 block md:table-cell">{index + 1}</td>
              <td className="p-2 block md:table-cell">{user.firstName}</td>
              <td className="p-2 block md:table-cell">{user.lastName}</td>
              <td className="p-2 block md:table-cell">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
