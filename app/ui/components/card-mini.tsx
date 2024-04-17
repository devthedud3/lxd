import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  uuid: string;
  name: string;
  image_url: string;
  price: string;
  category: string;
  subcategory: string;
};

export default function MiniCard({
  uuid,
  name,
  image_url,
  price,
  category,
  subcategory,
}: CardProps) {
  return (
    <Link
      className="w-fit flex flex-col h-full p-3 rounded cursor-pointer transition duration-100 ease-in border border-white hover:scale-105 hover:border-stone-200"
      href={`/shop/product?id=${uuid}`}
    >
      <Image
        className=""
        alt={name}
        src={`${image_url}1?$productimages-largedesktop$&fmt=auto`}
        height={1000}
        width={1000}
        style={{ width: "300px", height: "auto" }}
        priority
      />

      <div className="w-full py-3 flex text-xs justify-between">
        <p className="font-medium">{name}</p>
        <p className="">${price}</p>
      </div>
      <p className="text-xs">{subcategory}</p>
    </Link>
  );
}
