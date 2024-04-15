import React, { useState } from "react";
import { SHOP_CATEGORIES } from "@/app/lib/constants";

type CategoryMenuType = {
  setQuery: (e: string) => void;
};

export default function CategoryMenu({ setQuery }: CategoryMenuType) {
  const [category, setCategory] = useState<string>(SHOP_CATEGORIES[0]);

  function updateCategories(e: string) {
    setCategory(e);
    setQuery(`?category=${e}`);
  }

  return (
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
  );
}
