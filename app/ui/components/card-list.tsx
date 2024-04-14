"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";

interface ItemList {
  category?: string;
}

export function CardList({ category }: ItemList) {
  const [shop, setShop] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const items: any = [];
  useEffect(() => {
    async function getShop() {
      const response = await fetch("/api/shop", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cache: "no-store",
        },
      });

      const { items } = await response.json();
      return items;
    }
    getShop()
      .then((items) => setShop(items))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shop.map((val: any, key: number) => {
        return <Card key={key} {...val} />;
      })}
    </div>
  );
}
