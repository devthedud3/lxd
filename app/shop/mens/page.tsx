"use client";
import React, { useEffect, useState } from "react";

import {
  Button,
  CardSlider,
  Footer,
  List,
  ProductDetails,
} from "@/app/ui/components";
import { SHIPPING_DETAILS } from "@/app/lib/constants";
import { ShopAPI } from "@/app/lib/data";
import Loading from "@/app/loading";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Mens() {
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
          <div className="flex pb-10 flex-wrap items-center justify-center gap-y-2 md:gap-0">
            {[1, 2, 3, 4].map((val: number, index: number) => {
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

          <div className="flex flex-col w-full pb-10">
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-end">
                <h1 className="pb-4 font-bold">CRWN COLLECTION</h1>
                <h1 className="text-lg font-small text-nowrap">
                  {product?.name}
                </h1>
              </div>
              <div className="hidden md:flex items-center">
                <Button primary name="Add to Cart" />
              </div>
              <div className="flex items-end md:hidden">
                <Button
                  icon={<RiShoppingCartLine />}
                  primary
                  additionalTWProps={"rounded-full"}
                />
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
