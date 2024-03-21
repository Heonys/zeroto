import { getFollowByUsername } from "@/api/github";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { username: string };
};

export async function GET(req: NextRequest, context: Context) {
  return getFollowByUsername(context.params.username)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(JSON.stringify(err), { status: 500 }));
}
