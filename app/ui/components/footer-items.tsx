import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import Logo from "./logo";
import Link from "next/link";

type FooterProps = {
  headline?: string;
  logo?: boolean;
  details?: string[];
};

export default function FooterItems({ headline, logo, details }: FooterProps) {
  return (
    <div className="flex ">
      {logo && <Logo size={200} />}
      <div className="flex h-full w-full flex-col">
        <h1 className="mb-2 font-semibold">{headline?.toLocaleUpperCase()}</h1>
        {details?.map((value: string, key: number) => {
          return (
            <Link
              key={key}
              className="text-xs pt-3"
              href={`/${value.toLocaleLowerCase()}`}
            >
              {value}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
