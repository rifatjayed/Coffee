import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="">
      <nav className=" text-white bg-[#151111] py-4 px-6 flex justify-between items-center shadow-lg h-[80px]">
        {/* Left Side - Logo/Icon */}
        <div className="flex items-center space-x-2">
          <span
            className="text-2xl  font-normal
 text-white text-[22px] leading-[1] uppercase block text-center"
          >
            <p>Coffee</p>
            <p className="ml-2 uppercase text-[12px] block text-center text-white tracking-[5px]">
              Blend
            </p>
          </span>
        </div>

        {/* Center - Menu Links */}
        <div className="hidden md:flex space-x-6 font-poppins uppercase font-medium text-base">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/menu" className="hover:text-blue-400 transition">
            Menu{" "}
          </Link>
          <Link to="/service" className="hover:text-blue-400 transition">
            Service
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Right Side - User Button */}
        <Link className="flex items-center  py-2 rounded-lg transition">
          {/* <User className="w-5 h-5 mr-2" /> */}
          <BsCart3 className="text-[25px]" />

          <FaRegUser className="text-[25px] ml-[15px]" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
