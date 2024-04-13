import React from "react";
import { getShop } from "../lib/data";
import { Banner, Header } from "../ui/components";

export default async function Shop() {
  const shop = getShop();
  console.log(shop);

  return (
    <div className="flex-1 h-screen">
      <Banner show />
      <div className="flex flex-col h-full w-full px-10 pb-4">
        <Header />
        <div className="flex flex-1 flex-col h-full border">
          Shop Page - COMING SOON
        </div>
      </div>
    </div>
  );
}
