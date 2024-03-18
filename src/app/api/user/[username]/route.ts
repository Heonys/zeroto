import { NextRequest, NextResponse } from "next/server";
import { getUserByUsername } from "@/api/github";

type Context = {
  params: { username: string };
};

export async function GET(req: NextRequest, context: Context) {
  const data = await getUserByUsername(context.params.username);
  return NextResponse.json(data);
}
