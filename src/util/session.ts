import authOption from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export async function withSessionUser(
  //   handler: (user: AuthUser) => Promise<Response>
  handler: (...args: any) => any,
): Promise<Response> {
  const session = await getServerSession(authOption);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 404 });
  }
  return handler(user);
}
