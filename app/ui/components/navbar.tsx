import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="flex h-full justify-between w-full flex-wrap ">
      <div className="flex items-center space-x-2 cursor-pointer flex-1">
        <HiOutlineMenuAlt3
          className="transition ease-out duration-200 cursor-pointer hover:scale-110"
          size={20}
        />
        <p>Menu</p>
      </div>

      <Logo size={35} />

      <div className="flex-1 flex justify-end">
        <div className="flex items-center space-x-6">
          <RiSearch2Line
            className="transition ease-out duration-200 cursor-pointer hover:scale-110"
            size={20}
          />
          <RiShoppingCartLine
            className="transition ease-out duration-200 cursor-pointer hover:scale-110"
            size={20}
          />
          <p className="transition ease-out duration-200 border-b border-white hover:border-black hover:scale-105 cursor-pointer">
            Register
          </p>
        </div>
      </div>
    </div>
  );
}
