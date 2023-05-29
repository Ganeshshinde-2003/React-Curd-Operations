import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3003/users", data).then((res) => {
      navigate("/");
    });
  };

  return (
    <div className="pt-[75px] w-screen h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center mx-8 text-black">
        Add User
      </h1>
      <form className="w-[80%] h-full flex flex-col mt-4 justify-center items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter you name"
          className="w-[80%] bg-white/10 text-xl font-normal outline-none mt-4 border border-zinc-400 py-4 pl-6"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter you email"
          className="w-[80%] bg-white/10 text-xl font-normal outline-none mt-4 border border-zinc-400 py-4 pl-6"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="enter you number"
          className="w-[80%] bg-white/10 text-xl font-normal outline-none mt-4 border border-zinc-400 py-4 pl-6"
        />
        <button
          onClick={submitData}
          className="w-[80%] bg-blue-600 text-xl font-normal text-white rounded-lg outline-none mt-4 py-4 pl-6"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
