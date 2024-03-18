import { getRepositorysByUsername } from "@/api/github";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { username: string };
};

export async function GET(req: NextRequest, context: Context) {
  const data = await getRepositorysByUsername(context.params.username);
  return NextResponse.json(data);
}
