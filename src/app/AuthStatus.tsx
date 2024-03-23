"use client";
import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MenuIcon, LoginIcon } from "./icon";
import LoadingButton from "./components/LoadingButton";

const AuthStatus = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated")
    return (
      <Box className="p-2">
        <Flex>
          <Link href="/api/auth/signin">
            <Button variant="outline" radius="large" highContrast>
              <LoginIcon size={20} />
              <Text size="2">Sign in</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    );

  const handleClick = async () => {
    router.push("/api/auth/signout");
  };

  if (status === "loading")
    return (
      <Box className="bg-[#d82e5a] p-1 rounded-3xl">
        <div className="px-2">
          <LoadingButton />
        </div>
      </Box>
    );

  return (
    <Box className="bg-white p-1 rounded-3xl">
      <Flex align="center" gap="1" className="px-1">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Flex align="center" gap="1">
              <MenuIcon size={20} />
            </Flex>
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
        <Avatar
          src={session!.user!.image!}
          fallback="?"
          size="2"
          radius="full"
          className="cursor-pointer"
          referrerPolicy="no-referrer"
        />
        <Text size="2" weight="bold">
          {session!.user!.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default AuthStatus;
