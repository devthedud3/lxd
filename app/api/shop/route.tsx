import { pool } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  let query = "SELECT * FROM SHOP";
  if (category && category !== "all collections") {
    query += ` WHERE category = '${category}' LIMIT 4`;
  }

  try {
    const { rows } = await pool.query(`${query}`);

    if (rows.length == 0) return NextResponse.json({ items: [] });
    return NextResponse.json({ items: rows });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
