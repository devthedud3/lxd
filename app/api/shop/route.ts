import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

type ParamType = {};

export async function GET(req: NextRequest) {
  try {
    console.log("here");
    return NextResponse.json({ message: "working" });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
