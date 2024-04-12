import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type ParamType = {};

export async function GET(req: NextApiRequest) {
  try {
    console.log("here");
    return NextResponse.json({ message: "working" });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
