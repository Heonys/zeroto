import { Flex } from "@radix-ui/themes";
import React from "react";
import HeroButton from "./HeroButton";
import { DashboardIcon, DocumentIcon, GithubIcon } from "@/app/icon";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const HeroButtonGroup = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <Flex direction="row" gap="3">
      {user ? (
        <HeroButton
          title="Dashboard"
          color="iris"
          icon={<DashboardIcon size={"1.2vw"} />}
          onClick={() => router.push("/me")}
        />
      ) : (
        <HeroButton
          title="Sign in to GitHub"
          color="iris"
          icon={<GithubIcon size={"1.2vw"} />}
          onClick={() => {
            router.push("/api/auth/signin");
          }}
        />
      )}
      <HeroButton
        title="How to use?"
        color="white"
        icon={<DocumentIcon size={"1.2vw"} />}
        onClick={() => router.push("/docs")}
      />
    </Flex>
  );
};

export default HeroButtonGroup;
