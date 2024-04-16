import React from "react";
import { LuConstruction } from "react-icons/lu";

export default function Status() {
  return (
    <div className="border-2 border-black bg-black flex space-x-2 left-2 items-center bottom-2 p-2 fixed z-50 rounded-full">
      <LuConstruction color="yellow" />
      <h1 className="text-sm text-white ">In development</h1>
      <LuConstruction color="yellow" />
    </div>
  );
}
