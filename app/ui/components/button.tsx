import React from "react";

type ButtonProps = {
  name?: string;
  animate?: boolean;
  primary?: boolean;
  //@ts-ignore
  icon?: IconType;
};

export default function Button({ name, animate, primary, icon }: ButtonProps) {
  const color = primary && "bg-amber-300 border-amber-300 ";
  return (
    <>
      <div
        className={`transition duration-100 ease-in hover:scale-105 hover:border-black flex border ${color} h-fit p-3 cursor-pointer`}
      >
        {icon && icon}
        {name && <p className="text-sm text-nowrap px-8">{name}</p>}
      </div>
    </>
  );
}
