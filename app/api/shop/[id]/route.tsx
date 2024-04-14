import { pool } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

type ShopItemProps = {
  id: number;
};
export async function GET(
  req: NextRequest,
  context: { params: ShopItemProps }
) {
  try {
    const { id } = context.params;
    const { rows } = await pool.query("SELECT * FROM SHOP WHERE id = $1", [id]);
    if (rows.length == 0) throw new Error("There were issues retrieving item.");
    return NextResponse.json({ items: rows });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
