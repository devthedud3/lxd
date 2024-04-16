"use client";
import React, { useEffect, useState } from "react";

import { Button, CardSlider, List, ProductDetails } from "@/app/ui/components";
import { SHIPPING_DETAILS } from "@/app/lib/constants";
import { ShopAPI } from "@/app/lib/data";

export default function Mens() {
  const [product, setProduct] = useState<Item>();
  useEffect(() => {
    ShopAPI().then((item) => setProduct(item[0]));
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-between">
      <div className="mb-10 flex space-x-4 overflow-x-scroll">
        <CardSlider image={product?.image_url} />
        <CardSlider image={product?.image_url} />
        <CardSlider image={product?.image_url} />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col justify-end">
            <h1 className="pb-4 font-bold">CRWN COLLECTION</h1>
            <h1 className="text-lg font-small text-nowrap">{product?.name}</h1>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="border p-3">Size</p>
          </div>
          <div className="flex items-center">
            <Button primary name="Add to Cart" />
          </div>
        </div>
        <ProductDetails price={product?.price} />
        <div className="my-4">
          <List headline="Shipping" details={SHIPPING_DETAILS} />
        </div>
      </div>
    </div>
  );
}
