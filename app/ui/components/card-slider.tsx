"use client";
import React, { useEffect, useState } from "react";

import { ShopAPI } from "@/app/lib/data";

export function CardSlider({
  headline,
  search,
}: {
  headline?: string;
  search?: boolean;
}) {
  const [product, setProduct] = useState<Object>();
  useEffect(() => {
    ShopAPI().then((items) => setProduct(items));
  }, []);

  console.log(product);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        Slider
      </div>
    </>
  );
}
