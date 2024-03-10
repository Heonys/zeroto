import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthStatus = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  //   if (status === "loading") return <Skeletom width="3rem" />;
  if (status === "unauthenticated")
    return <Link href="/api/auth/signin">로그인</Link>;

  const handleClick = async () => {
    router.push("/api/auth/signout");
  };

  if (status === "loading") {
    return null;
  }

  return (
    <Box>
      <Flex align="center" gap="2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              size="2"
              radius="full"
              className="cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2"> {session!.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item color="red" onClick={handleClick}>
              로그아웃
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Text size="2">{session!.user!.name}님 환영합니다</Text>
      </Flex>
    </Box>
  );
};

export default AuthStatus;
