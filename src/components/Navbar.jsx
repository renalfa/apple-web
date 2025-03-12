import React from "react";
import { appleImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={13} height={14} />

        <ul className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((list) => (
            <li
              key={list}
              className="px-5 text-xs font-light tracking-wide transition-all cursor-pointer text-gray hover:text-white"
            >
              {list}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={16} height={16} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
