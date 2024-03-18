import { User } from "@/atom/userAtom";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const RecentSearchAvatar = ({ avatar_url, username }: User) => {
  return (
    <Link href={`/search?username=${username}`}>
      <Flex
        gap="3"
        align="center"
        className="border-2 border-gray-200 rounded-full bg-white px-3 py-1"
      >
        <Avatar size="1" src={avatar_url} radius="full" fallback="T" />
        <Box>
          <Text as="div" size="1" weight="bold">
            {username}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default RecentSearchAvatar;
