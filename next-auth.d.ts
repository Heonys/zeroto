import NextAuth from "next-auth";
import type { AuthUser } from "@/model/user";

declare module "next-auth" {
  interface DefaultUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username: string;
    likes: { name: string; avatar_url: string }[];
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username: string;
      likes: { name: string; avatar_url: string }[];
    };
  }
}
