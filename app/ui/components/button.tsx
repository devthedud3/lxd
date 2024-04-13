"use client";

import { useRouter } from "next/navigation";
import React from "react";

type ButtonProps = {
  name?: string;
  animate?: boolean;
  primary?: boolean;
  //@ts-ignore
  icon?: IconType;
  route?: string;
};

export default function Button({
  name,
  animate,
  primary,
  icon,
  route,
}: ButtonProps) {
  const router = useRouter();
  const color = primary && "bg-amber-300 border-amber-300 ";
  const a = animate && "hover:scale-105 ";

  function handleClick() {
    route && router.push(route);
  }
  return (
    <>
      <div
        className={`transition duration-100 ease-in ${a} hover:border-black flex border ${color} h-fit p-3 cursor-pointer`}
        onClick={handleClick}
      >
        {icon && icon}
        {name && <p className="text-sm text-nowrap px-8">{name}</p>}
      </div>
    </>
  );
}
