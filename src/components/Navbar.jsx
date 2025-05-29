import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 font-bold">
      <div className="max-w-6xl mx-auto flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/product/101" className="hover:underline">
          Product 101
        </Link>
        <Link to="/product/202" className="hover:underline">
          Product 202
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
