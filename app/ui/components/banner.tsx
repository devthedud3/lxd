import { BANNER_CATEGORIES } from "@/app/lib/constants";
import React from "react";

type BannerProps = {
  show: boolean;
};

export default function Banner({ show }: BannerProps) {
  return (
    <>
      {show && (
        <div className="fixed text-xs w-full bg-stone-900 text-white py-2 text-center z-40">
          {BANNER_CATEGORIES.shipping_discount.toLocaleUpperCase()}
        </div>
      )}
    </>
  );
}
