import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:3003/users").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  }, [users]);

  const Delete = (id: any) => {
    axios.delete(`http://localhost:3003/users/${id}`).then((res) => {
      loadUsers();
    });
  };

  return (
    <div className="w-full h-full flex flex-col px-10 py-8 pt-[75px]">
      <h1 className="text-3xl font-semibold text-center mx-8 text-black">
        Home page
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light border border-black">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-lg">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-lg">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-lg">
                            {user.phone}
                          </td>
                          <td className="whitespace-nowrap flex space-x-4 mt-2">
                            <Link
                              to={`/users/${user.id}`}
                              className="px-6 py-2 text-white bg-black rounded-lg font-semibold"
                            >
                              View
                            </Link>
                            <Link
                              to={`/edituser/${user.id}`}
                              className="px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => {
                                Delete(user.id);
                              }}
                              className="px-6 py-2 text-white bg-red-600 rounded-lg font-semibold"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
