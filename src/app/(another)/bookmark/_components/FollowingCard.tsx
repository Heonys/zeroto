"use client";
import { Avatar, Box, Flex } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  username: string;
  avatar_url: string;
};

const FollowingCard = ({ avatar_url, username }: Props) => {
  return (
    <Link href={`/search?username=${username}`}>
      <Flex
        gap="3"
        align="center"
        className="border-2 border-gray-200 rounded-2xl  bg-white p-3"
      >
        <Avatar size="5" src={avatar_url} radius="full" fallback="T" />
        <Box>
          <div className="text-[0.95vw] font-semibold">{username}</div>
        </Box>
      </Flex>
    </Link>
  );
};

export default FollowingCard;
