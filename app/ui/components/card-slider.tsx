import React from "react";
import Image from "next/image";

export function CardSlider({
  image,
  height,
}: {
  image?: string;
  height?: string;
}) {
  return (
    <div className="flex w-full items-center justify-center">
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
