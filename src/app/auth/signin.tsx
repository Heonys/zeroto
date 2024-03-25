import { Button } from "@radix-ui/themes";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const { data, status } = useSession();
  const callbackUrl = process.env.NEXT_PUBLIC_HOMEPAGE_URL as string;

  if (status !== "authenticated") {
    return <Button onClick={() => signIn("github", { callbackUrl })} />;
  }
}
