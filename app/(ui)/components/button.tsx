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
    ? "bg-black border-black "
    : "bg-white border-stone-200 ";
  const a = animate && "hover:scale-105 ";

  return (
    <>
      <Link
        className={`transition duration-100 ease-in ${a} hover:scale-105 w-fit flex border-2 ${color} h-fit p-2 cursor-pointer ${additionalTWProps}`}
        href={route || ""}
      >
        {icon && icon}
        {name && (
          <p
            className={`text-sm ${
              primary ? "text-white" : "text-black"
            } text-nowrap px-8`}
          >
            {name}
          </p>
        )}
      </Link>
    </>
  );
}
