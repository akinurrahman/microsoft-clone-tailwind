import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { PiUserCirclePlusDuotone } from "react-icons/pi";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <header className="container flex justify-between p-4 items-center">
      <div className="flex space-x-5 items-center">
        {hamburger ? (
          <AiOutlineClose size={24} onClick={() => setHamburger((prev) => !prev)} />
        ) : (
          <RxHamburgerMenu
            size={24}
            className="sm:hidden"
            onClick={() => setHamburger((prev) => !prev)}
          />
        )}
        <VscSearch size={18} className="sm:hidden" />
      </div>
      <div className="sm:order-first flex items-center space-x-2">
        <img
          src="/microsoft_logo.png"
          alt="logo"
          className="w-2/4 mx-auto sm:w-1/4 "
        />
        <nav className="hidden sm:flex ">
          <ul className="flex space-x-4 text-gray-700  whitespace-nowrap">
            <li>Microsoft 365</li>
            <li>Teams</li>
            <li>Windows</li>
            <li>Surface</li>
            <li>Xbox</li>
            <li>Support</li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-5 items-center">
        <select name="" id="" className="hidden sm:flex">
          <option value="">All Microsoft</option>
        </select>
        <VscSearch size={18} className="hidden sm:flex" />
        <MdOutlineShoppingCart size={24} />
        <PiUserCirclePlusDuotone size={30} />
      </div>
    </header>
  );
};

export default Header;
