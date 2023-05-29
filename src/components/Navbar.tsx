import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between fixed ">
      <h1 className="text-3xl font-semibold text-white">CURD</h1>
      <Link
        to="adduser"
        className="w-48 bg-white text-blue-300 font-semibold text-xl flex justify-center items-center h-12 rounded-lg"
      >
        Add User
      </Link>
    </div>
  );
}

export default Navbar;
