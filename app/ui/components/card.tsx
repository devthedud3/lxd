"use client";
import Image from "next/image";
import React, { useState } from "react";

type ItemProps = {
  id: number;
  name: string;
  imageurl: string;
  price: string;
  category: string;
};

export default function Card({
  id,
  name,
  imageurl,
  price,
  category,
}: ItemProps) {
  return (
    <div
      className="min-w-[fit-content] cursor-pointer"
      onClick={() => console.log(id)}
    >
      <Image
        className=""
        alt={name}
        src={imageurl}
        height={1000}
        width={1000}
        style={{ width: "auto", height: "400px" }}
        priority
      />

      <div className="w-full py-3 flex bg-white text-xs justify-between">
        <p className="font-medium">{name}</p>
        <p className="">${price}</p>
      </div>
      <p className="text-xs">{category}</p>
    </div>
  );
}
