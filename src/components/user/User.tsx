import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div className="pt-[75px] w-full h-full flex flex-col justify-center items-center">
      <div className="w-[550px] h-[220px] border border-black flex mt-16">
        <div className="w-5/12 flex flex-col space-y-4">
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            Name
          </h2>
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            Email
          </h2>
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            Phone
          </h2>
        </div>
        <div className="w-7/12 flex flex-col space-y-4">
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            {user.name}
          </h2>
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            {user.email}
          </h2>
          <h2 className="text-black font-semibold font-Inter text=2xl px-6 py-4 border-b border-black">
            {user.phone}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default User;
