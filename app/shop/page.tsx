import { SHOP_CATEGORIES } from "../lib/constants";
import { CardList } from "../ui/components/card-list";

export default function Shop() {
  return (
    <>
      <div className="flex flex-1 flex-col h-full w-full items-center">
        <div className="flex justify-center py-20">
          <h1 className="text-3xl ">FIND BY CATEGORY</h1>
        </div>
        <div className="flex w-full space-x-10 py-6 text-xs">
          {SHOP_CATEGORIES.map((category, key) => {
            return (
              <p
                className="w-fit transition duration-200 ease-in border-b border-white hover:border-black cursor-pointer"
                key={key}
              >
                {category}
              </p>
            );
          })}
        </div>

        <CardList />
      </div>
    </>
  );
}
