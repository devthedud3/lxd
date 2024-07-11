"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SHOP_HOME, ShopAPI } from "@/app/lib/data";

import CategoryMenu from "./categories-menu";
import MiniCard from "./card-mini";
import Loading from "@/app/loading";

export function CardList({
  headline,
  search,
}: {
  headline?: string;
  search?: boolean;
}) {
  const [shop, setShop] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  return (
    <>
      {headline && (
        <div className="flex justify-center pt-20 pb-4">
          <h1 className="text-3xl ">{headline.toLocaleUpperCase()}</h1>
        </div>
      )}

      {search && <CategoryMenu setQuery={setQuery} />}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        {SHOP_HOME.filter((value) => value.category?.includes(query)).map(
          (val: any, key: number) => {
            return <MiniCard key={key} {...val} />;
          }
        )}
      </div>
    </>
  );
}
