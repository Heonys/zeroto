"use client";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  GithubIcon,
  HomeIcon,
  DashboardIcon,
  DocumentIcon,
  SettingIcon,
  FriendsIcon,
  StarIcon,
} from "./icon";
import { useSession } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="mb-5 p-2 ">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="4" direction="column">
            <Link href="/">
              <GithubIcon size={40} />
            </Link>
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;

const NavLinks = () => {
  const currentPath = usePathname();

  const { data: session, status } = useSession();

  const links = [
    { label: <HomeIcon size={25} />, href: "/" },
    { label: <DocumentIcon size={25} />, href: "/docs" },
    ...(status === "authenticated"
      ? [{ label: <DashboardIcon size={25} />, href: "/me" }]
      : []),
    { label: <StarIcon size={25} />, href: "/bookmark" },
    { label: <FriendsIcon size={25} />, href: "/search" },
    { label: <SettingIcon size={25} />, href: "/setting" },
  ];

  return (
    <ul className="flex flex-col space-y-3">
      {links.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <div
              className={`
            rounded-full border-gray-300 border p-2
            ${href === currentPath ? "bg-[#d82e5a] text-white" : "bg-white text-zinc-900"}
            `}
            >
              {label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
