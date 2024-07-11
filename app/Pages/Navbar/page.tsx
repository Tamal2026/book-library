import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch, FaToggleOn } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-16 border border-red-500 flex justify-around items-center">
      <div className="logo-section font-bold text-2xl">
        BookNest
      </div>

      <div className="search-box w-1/2 relative rounded-lg h-10 flex items-center bg-slate-200">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="search"
          name="Search"
          id=""
          placeholder="Search for your favourite book"
          className="w-full h-full pl-10 pr-3 text-gray-600 bg-transparent rounded-lg focus:outline-none"
        />
      </div>
      <div className="profile-container flex justify-around items-center space-x-5 text-3xl">
        <div className="notification">
          <FaToggleOn />
        </div>
        <div className="notification">
          <IoMdNotificationsOutline />
        </div>
        <div className="profile">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
