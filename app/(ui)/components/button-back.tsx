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
    <GrPrevious
      className="border p-2 m-8 rounded-full"
      size={40}
      onClick={handleClick}
    />
  );
}
