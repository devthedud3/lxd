import React from "react";

import { List } from "@/app/ui/components";
import { TEST_DETAILS } from "@/app/lib/constants";

export default function ProductDetails({ price }: { price?: string }) {
  return (
    <div className="flex flex-col h-full w-full justify-between">
      <p className="text-xs text-stone-400 py-3">${price}</p>
      <div className="h-24 border-l border-black" />
      <div className="my-4">
        <List headline="Details" details={TEST_DETAILS} />
      </div>
    </div>
  );
}
