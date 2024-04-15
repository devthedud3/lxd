import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type CardProps = {
  uuid: string;
  name: string;
  image_url: string;
  price: string;
  subcategory: string;
};

export default function Card({
  uuid,
  name,
  image_url,
  price,
  subcategory,
}: CardProps) {
  const router = useRouter();

  return (
    <div
      className="w-fit cursor-pointer"
      onClick={() => {
        console.log(uuid);
      }}
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
    </div>
  );
}
