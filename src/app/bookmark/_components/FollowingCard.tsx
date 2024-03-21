"use client";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
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
        <Avatar size="4" src={avatar_url} radius="full" fallback="T" />
        <Box>
          <Text as="div" size="1" weight="bold">
            {username}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default FollowingCard;
