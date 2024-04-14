import React from "react";
import Card from "./card";

interface ItemList {
  category?: string;
}

async function getShop() {
  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV == "development"
          ? process.env.LOCAL_URL
          : process.env.POSTGRES_HOST
      }/api/shop`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { items } = await response.json();
    return items;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function CardList({}: ItemList) {
  const shop = await getShop();
  console.log(shop);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shop.map((val: any, key: number) => {
        return <Card key={key} {...val} />;
      })}
    </div>
  );
}
