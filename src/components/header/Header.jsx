import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { PiUserCirclePlusDuotone } from "react-icons/pi";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <header className=" flex justify-between p-4 items-center">
      <div className="flex space-x-5 items-center">
        {hamburger ? (
          <AiOutlineClose
            size={24}
            onClick={() => setHamburger((prev) => !prev)}
          />
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
          className="w-2/4 mx-auto md:w-1/4"
        />
        <nav className={hamburger ? ` md:flex  ` : `hidden md:flex  `}>
          <ul
            className={`${
              hamburger
                ? "absolute top-16 left-0 right-0 pb-7 pl-7  space-y-6 bg-gray-100"
                : "flex  flex-col md:flex-row text-gray-700  space-x-4 mx-4 whitespace-nowrap "
            }`}
          >
            <li></li>
            <li className="hover:text-blue-600">Microsoft 365</li>
            <li className="hover:text-blue-600">Teams</li>
            <li className="hover:text-blue-600">Windows</li>
            <li className="hover:text-blue-600">Surface</li>
            <li className="hover:text-blue-600">Xbox</li>
            <li className="hover:text-blue-600">Support</li>
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
