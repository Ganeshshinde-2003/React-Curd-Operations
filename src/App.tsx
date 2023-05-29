import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import AddUser from "./components/user/AddUser";
import Edit from "./components/user/Edit";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
