"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Card from "./card";
import { SHOP_CATEGORIES } from "@/app/lib/constants";
import { getSearchQuery, getShop } from "@/app/lib/data";

export function CardList({ headline }: { headline: string }) {
  const [shop, setShop] = useState<any>([]);
  const [category, setCategory] = useState<string>(SHOP_CATEGORIES[0]);
  const [query, setQuery] = useState<string>(getSearchQuery());

  const router = useRouter();

  useEffect(() => {
    router.push(query, { scroll: false });
    getShop(query).then((items) => setShop(items));
  }, [query]);

  function updateCategories(e: string) {
    setCategory(e);
    setQuery(`?category=${e}`);
  }

  return (
    <>
      <div className="flex justify-center pt-20 pb-4">
        <h1 className="text-3xl ">{headline.toLocaleUpperCase()}</h1>
      </div>
      <div className="hidden space-x-3 py-6 text-xs md:flex">
        {SHOP_CATEGORIES.map((cat, key) => {
          return (
            <div
              className={`w-fit transition duration-200 ease-in border-b p-3 ${
                category === cat ? "border-black" : "border-white"
              } hover:bg-stone-200 cursor-pointer text-nowrap`}
              key={key}
              onClick={() => updateCategories(cat)}
            >
              {cat.toLocaleUpperCase()}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        {shop.map((val: any, key: number) => {
          return <Card key={key} {...val} />;
        })}
      </div>
    </>
  );
}
