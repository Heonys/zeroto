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
  const user = session?.user;
  const router = useRouter();

  const handleClickLogout = async () => {
    router.push("/api/auth/signout");
  };

  const handleClickDashboard = () => {
    router.push("/me");
  };

  if (status === "loading")
    return (
      <Box className="bg-[#d82e5a] p-1 rounded-3xl">
        <div className="px-2">
          <LoadingButton />
        </div>
      </Box>
    );

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

  return (
    <Box className="bg-white p-1 rounded-3xl">
      {user && (
        <Flex align="center" gap="1" className="px-1">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Flex align="center" gap="1">
                <MenuIcon size={20} />
              </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text size="2"> {user.email}</Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item onClick={handleClickDashboard}>
                Dashboard
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" onClick={handleClickLogout}>
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Avatar
            src={user.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
          <Text size="2" weight="bold">
            {user.name}
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default AuthStatus;
