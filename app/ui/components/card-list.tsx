"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Card from "./card";
import { getSearchQuery, getShop } from "@/app/lib/data";
import CategoryMenu from "./categories-menu";

export function CardList({ headline }: { headline: string }) {
  const [shop, setShop] = useState<any>([]);
  const [query, setQuery] = useState<string>(getSearchQuery());

  const router = useRouter();

  useEffect(() => {
    router.push(query, { scroll: false });
    getShop(query).then((items) => setShop(items));
  }, [query]);

  return (
    <>
      <div className="flex justify-center pt-20 pb-4">
        <h1 className="text-3xl ">{headline.toLocaleUpperCase()}</h1>
      </div>
      <CategoryMenu setQuery={setQuery} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        {shop.map((val: any, key: number) => {
          return <Card key={key} {...val} />;
        })}
      </div>
    </>
  );
}
