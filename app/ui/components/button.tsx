"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  name?: string;
  animate?: boolean;
  primary?: boolean;
  //@ts-ignore
  icon?: IconType;
  route?: string;
  additionalTWProps?: string;
};

export default function Button({
  name,
  animate,
  primary,
  icon,
  route,
  additionalTWProps,
}: ButtonProps) {
  const color = primary
    ? "bg-amber-400 border-amber-300 "
    : "bg-white border-stone-300 ";
  const a = animate && "hover:scale-105 ";

  return (
    <>
      <Link
        className={`transition duration-100 ease-in ${a} hover:border-black w-fit flex border ${color} h-fit p-3 cursor-pointer ${additionalTWProps}`}
        href={route || ""}
      >
        {icon && icon}
        {name && <p className="text-sm text-nowrap px-8">{name}</p>}
      </Link>
    </>
  );
}
