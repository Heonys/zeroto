"use client";
import { Flex } from "@radix-ui/themes";
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
    <div className="mb-5 p-2 w-full">
      <Flex align="center" gap="4" direction="column">
        <Link href="/">
          <GithubIcon size={"2.7vw"} />
        </Link>
        <NavLinks />
      </Flex>
    </div>
  );
};

export default Navbar;

const NavLinks = () => {
  const currentPath = usePathname();

  const { data: session, status } = useSession();

  const links = [
    { label: <HomeIcon size={"1.8vw"} />, href: "/" },
    { label: <DocumentIcon size={"1.8vw"} />, href: "/docs" },
    ...(status === "authenticated"
      ? [
          { label: <DashboardIcon size={"1.8vw"} />, href: "/me" },
          { label: <StarIcon size={"1.8vw"} />, href: "/bookmark" },
        ]
      : []),
    { label: <FriendsIcon size={"1.8vw"} />, href: "/search" },
    { label: <SettingIcon size={"1.8vw"} />, href: "/setting" },
  ];

  return (
    <ul className="flex flex-col space-y-[1.5vh]">
      {links.map(({ href, label }) => {
        return (
          <Link key={href} href={href}>
            <div
              className={`
            rounded-full border-gray-300 border p-[0.5vw]
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
