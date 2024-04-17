"use client";
import React from "react";
import { GrPrevious } from "react-icons/gr";
import { useRouter } from "next/navigation";

type BreadcrumbsProps = {};

export default function History({}: BreadcrumbsProps) {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <div
      className="transition durantion-100 hover:-translate-x-1 flex items-center space-x-4 cursor-pointer p-3 border w-fit"
      onClick={handleClick}
    >
      <GrPrevious />
      <p className="pr-1">Previous</p>
    </div>
  );
}
