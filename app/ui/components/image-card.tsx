import Image from "next/image";
import React from "react";

type ImageCardProps = {
  src: string;
  size: number;
  headline?: string;
  details?: string;
  additionalTailwindClasses?: string;
  animate?: boolean;
};

export default function ImageCard({
  src,
  size,
  headline,
  details,
  additionalTailwindClasses,
  animate,
}: ImageCardProps) {
  const a = animate && "transition duration-100 ease-in hover:scale-105";
  return (
    <div
      className={`relative ${a} p-3 pb-0 pl-0 cursor-pointer min-w-[fit-content] ${additionalTailwindClasses}`}
    >
      <Image
        className="block"
        src={src}
        width={size}
        height={size}
        objectFit="contain"
        alt={headline || src}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 ">
        <p className="text-xl mb-4 leading-tight font-bold">
          {headline?.toLocaleUpperCase()}
        </p>
        <p className="text-xs ">{details}</p>
      </div>
    </div>
  );
}
