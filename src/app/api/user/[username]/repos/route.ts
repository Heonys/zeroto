import { NextRequest, NextResponse } from "next/server";
import { getRepos } from "@/octokit/fetcher";

type Context = {
  params: { username: string };
};

export async function GET(req: NextRequest, context: Context) {
  return getRepos(context.params.username)
    .then((res) => NextResponse.json(res))
    .catch((err) => new Response(JSON.stringify(err), { status: 500 }));
}
