import Image from "next/image";
import React from "react";

type ImageCardProps = {
  src: string;
  height: number;
  width: number;
  headline?: string;
  details?: string;
  additionalTailwindClasses?: string;
  animate?: boolean;
};

export default function ImageCard({
  src,
  height,
  width,
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
        height={height}
        width={width}
        alt={headline || src}
        style={{ width: "auto" }}
        priority
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
