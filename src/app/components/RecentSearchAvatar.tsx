import { User } from "@/atom/userAtom";
import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { DeleteIcon } from "../icon";

type Props = {
  onDelete: (username: string) => void;
} & User;

const RecentSearchAvatar = ({ avatar_url, username, onDelete }: Props) => {
  return (
    <Flex
      gap="3"
      align="center"
      className="border-2 border-gray-200 rounded-full bg-white px-3 py-1"
    >
      <Link href={`/search?username=${username}`}>
        <Flex gap="3" align="center">
          <Avatar size="1" src={avatar_url} radius="full" fallback="T" />
          <Box>
            <Text as="div" size="1" weight="bold">
              {username}
            </Text>
          </Box>
        </Flex>
      </Link>
      <DeleteIcon size={20} onClick={() => onDelete(username)} />
    </Flex>
  );
};

export default RecentSearchAvatar;
