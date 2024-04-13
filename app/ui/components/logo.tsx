"use client";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  size: number;
}
export const Logo = ({ size }: ImageProps) => {
  return (
    <Link className="flex min-w-[fit-content] h-10 cursor-pointer" href="/">
      <Image
        src="/homepage/logo.svg"
        width={size}
        height={size}
        alt=""
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
};
