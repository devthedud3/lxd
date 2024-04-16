import { pool } from "@/app/lib/db";
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
  const { category } = context.params;

  try {
    const { rows } = await pool.query(
      "SELECT * FROM SHOP WHERE uuid = $1 AND category = $2",
      [id, category]
    );
    if (rows.length == 0) throw new Error("There were issues retrieving item.");
    return NextResponse.json({ items: rows });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
