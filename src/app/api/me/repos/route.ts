import { getRepositorysByUsername } from "@/api/github";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOption from "../../auth/[...nextauth]/authOptions";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOption);
  if (!session) {
    return new Response("bad Request", { status: 400 });
  }

  const data = await getRepositorysByUsername(session?.user.username!);
  return NextResponse.json(data);
}
