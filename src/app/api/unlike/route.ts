import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOption from "../auth/[...nextauth]/authOptions";
import { connectDB } from "@/db/connectdb";

export async function PATCH(req: NextRequest) {
  const { name, avatar_url } = await req.json();

  const session = await getServerSession(authOption);
  if (!session) {
    return new Response("bad Request", { status: 400 });
  }
  const username = session?.user?.username;

  const client = await connectDB;
  const db = client.db("test");

  const result = await db
    .collection("users")
    .updateOne({ username }, { $pull: { likes: { name } as any } });

  return NextResponse.json(result);
}
