import React from "react";

type BannerProps = {
  type?: string;
  message?: string;
};

export default function Banner({ type, message }: BannerProps) {
  return (
    <div className="text-xs w-full bg-stone-900 text-white py-2 text-center">
      {message?.toLocaleUpperCase()}
    </div>
  );
}
