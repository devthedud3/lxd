import Image from "next/image";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex w-full h-fit justify-between items-center py-6">
      <div className="transition ease-out duration-200 flex items-center space-x-2 hover:scale-105 cursor-pointer">
        <HiOutlineMenuAlt3 size={20} />
        <p>Menu</p>
      </div>
      <div className="flex">
        <Image src="/homepage/logo.svg" width={35} height={35} alt="" />
      </div>
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
          Login
        </p>
      </div>
    </div>
  );
}
