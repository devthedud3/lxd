import { SHOP_CATEGORIES } from "../lib/constants";
import { CardList } from "../ui/components/card-list";
import Layout from "../ui/components/layout";

export default function Shop() {
  return (
    <Layout>
      <div className="flex h-full w-full "></div>
      <div className="flex flex-1 flex-col h-full w-full items-center">
        <div className="flex justify-center py-20">
          <h1 className="text-3xl ">FIND BY CATEGORY</h1>
        </div>
        <div className="flex  space-x-10 py-6">
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

        <CardList category="sneakers" />
      </div>
    </Layout>
  );
}
