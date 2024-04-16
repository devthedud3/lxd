import React from "react";
import Image from "next/image";

export function CardSlider({ image }: { image?: string }) {
  return (
    <>
      <div className="flex w-full">
        <Image
          className="block"
          src={image || "/homepage/logo.svg"}
          alt={image || ""}
          width={1000}
          height={1000}
          style={{ width: "auto" }}
          priority
        />
      </div>
    </>
  );
}
