import { NextRequest, NextResponse } from "next/server";
import { getUserByUsername } from "@/api/github";

type Context = {
  params: { username: string };
};

export async function GET(req: NextRequest, context: Context) {
  return getUserByUsername(context.params.username)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(JSON.stringify(err), { status: 500 }));
}
