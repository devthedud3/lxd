import React from "react";
import { RiArrowDropRightFill } from "react-icons/ri";

type ListProps = {
  headline?: string;
  details: string[];
};

export default function List({ headline, details }: ListProps) {
  return (
    <div className="flex w-full flex-col">
      <h1 className="font-medium py-2 w-full border-b text-sm">{headline}</h1>
      <div className="flex flex-col ">
        {details.map((text: string, key: number) => {
          return (
            <div className="flex items-center py-2" key={key}>
              <RiArrowDropRightFill />
              <p className="text-xs">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
