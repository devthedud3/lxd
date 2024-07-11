import { SHOP_HOME } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

type ShopItemProps = {
  category: string;
};
export async function GET(
  req: NextRequest,
  context: { params: ShopItemProps }
) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    const rows = [SHOP_HOME.find((value) => value.uuid === id)];

    if (rows.length == 0) throw new Error("There were issues retrieving item.");
    return NextResponse.json({ items: rows });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
