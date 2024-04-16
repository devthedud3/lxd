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
      className="w-fit cursor-pointer"
      href={`/shop/${category}?id=${uuid}`}
    >
      <Image
        className=""
        alt={name}
        src={image_url}
        height={1000}
        width={1000}
        style={{ width: "auto", height: "400px" }}
        priority
      />

      <div className="w-full py-3 flex bg-white text-xs justify-between">
        <p className="font-medium">{name}</p>
        <p className="">${price}</p>
      </div>
      <p className="text-xs">{subcategory}</p>
    </Link>
  );
}
