import { getShop } from "@/app/lib/data";
import React from "react";
import Card from "./card";

interface ItemList {
  category?: string;
}

export async function CardList({ category }: ItemList) {
  const items = await getShop();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((val: any, key: number) => {
        return <Card key={key} {...val} />;
      })}
    </div>
  );
}
