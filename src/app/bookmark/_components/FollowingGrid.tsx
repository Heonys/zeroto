"use client";
import useFollow from "@/hooks/useFollow";
import FollowingCard from "./FollowingCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Box, Flex, Tabs, Text } from "@radix-ui/themes";

type Props = {
  usernmae: string;
};

const FollowingGrid = ({ usernmae }: Props) => {
  const {
    userFollowingQuery: { data },
  } = useFollow(usernmae);

  if (!data) return <LoadingSpinner />;

  return (
    <Flex direction="column" className="p-2">
      <Tabs.Root defaultValue="likes">
        <Tabs.List size="2">
          <Tabs.Trigger value="likes">
            <Text size="2" weight="bold">
              Likes
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="following">
            <Text size="2" weight="bold">
              Github Follwing
            </Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="followers">
            <Text size="2" weight="bold">
              Github Followers
            </Text>
          </Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2" className="max-h-[70vh] overflow-y-scroll">
          <Tabs.Content value="following">
            <ul>
              {data.followings.map(({ id, avatar_url, login }) => {
                return (
                  <li key={id} className="my-3">
                    <FollowingCard avatar_url={avatar_url} username={login} />
                  </li>
                );
              })}
            </ul>
          </Tabs.Content>

          <Tabs.Content value="followers">
            <ul>
              {data.followers.map(({ id, avatar_url, login }) => {
                return (
                  <li key={id} className="my-3">
                    <FollowingCard avatar_url={avatar_url} username={login} />
                  </li>
                );
              })}
            </ul>
          </Tabs.Content>

          <Tabs.Content value="likes">
            <Text size="2">좋아요를 누른 유저의 리스트가 보여집니다</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  );
};

export default FollowingGrid;
