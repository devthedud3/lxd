"use client";
import React, { Suspense, useEffect, useState } from "react";

import { Button, CardSlider, List, ProductDetails } from "@/app/ui/components";
import { SHIPPING_DETAILS } from "@/app/lib/constants";
import { ShopAPI } from "@/app/lib/data";
import Loading from "@/app/loading";

export default function Womens() {
  const [product, setProduct] = useState<Item>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ShopAPI()
      .then((item) => setProduct(item[0]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col h-full w-fit items-center justify-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex pb-10">
            <Suspense fallback={<Loading />} />
            {[1, 2, 3, 4].map((val: number, index: number) => {
              console.log("here", val);
              return (
                <CardSlider
                  key={index}
                  image={`${product?.image_url}${
                    index + 1
                  }?$productimages-largedesktop$&fmt=auto`}
                />
              );
            })}
          </div>

          <div className="flex flex-col w-inherit pb-10">
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-end">
                <h1 className="pb-4 font-bold">CRWN COLLECTION</h1>
                <h1 className="text-lg font-small text-nowrap">
                  {product?.name}
                </h1>
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
        </>
      )}
    </div>
  );
}
