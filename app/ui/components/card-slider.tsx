import React, { Suspense } from "react";
import Image from "next/image";
import Loading from "@/app/loading";

export default function CardSlider({
  image,
  height,
}: {
  image?: string;
  height?: string;
}) {
  return (
    <div className="flex w-fit h-fit items-center justify-center">
      <Image
        className="block"
        src={image || "/homepage/logo.svg"}
        alt={image || ""}
        width={1000}
        height={1000}
        style={{ width: "auto", height: `${height}` }}
        priority
      />
    </div>
  );
}
