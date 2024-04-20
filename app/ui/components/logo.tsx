"use client";
import Image from "next/image";
import Link from "next/link";
import { rubik } from "../fonts";

interface ImageProps {
  size: number;
}
export default function Logo({ size }: ImageProps) {
  return (
    <Link className="flex min-w-[fit-content] h-fit cursor-pointer" href="/">
      {/* <Image
        src="/homepage/logo.svg"
        width={size}
        height={size}
        alt=""
        style={{ width: "auto", height: "auto" }}
      /> */}
      <p className={`${rubik.className} text-2xl font-bold tracking-widest`}>
        LXD
      </p>
    </Link>
  );
}
