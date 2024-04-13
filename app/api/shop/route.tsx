import { pool } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { rows } = await pool.query("SELECT * FROM SHOP");
    if (rows.length == 0)
      throw new Error("There were issues retrieving shop data.");
    return NextResponse.json({ items: rows });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
