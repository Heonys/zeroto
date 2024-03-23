"use client";
import useFollow from "@/hooks/useFollow";
import FollowingCard from "./FollowingCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Box, Flex, Tabs, Text } from "@radix-ui/themes";
import useLikes from "@/hooks/useLikes";
import { StarIcon, GithubIcon } from "@/app/icon";

type Props = {
  usernmae: string;
};

const FollowingGrid = ({ usernmae }: Props) => {
  const {
    userFollowingQuery: { data: followData },
  } = useFollow(usernmae);

  const {
    authQuery: { data: authData },
  } = useLikes();

  if (!followData || !authData) return <LoadingSpinner />;

  return (
    <Flex direction="column" className="p-2">
      <Tabs.Root defaultValue="likes">
        <Tabs.List size="2">
          <Tabs.Trigger value="likes">
            <Flex gap="1" align="center">
              <StarIcon size={18} />
              <Text size="2" weight="bold">
                Likes
              </Text>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="following">
            <Flex gap="1" align="center">
              <GithubIcon size={18} />
              <Text size="2" weight="bold">
                Github Follwing
              </Text>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="followers">
            <Flex gap="1" align="center">
              <GithubIcon size={18} />
              <Text size="2" weight="bold">
                Github Followers
              </Text>
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2" className="max-h-[70vh] overflow-y-scroll">
          <Tabs.Content value="likes">
            <Text size="2">좋아요를 누른 유저의 리스트가 보여집니다</Text>
            <ul>
              {authData.likes.map(({ name, avatar_url }) => {
                return (
                  <li key={name} className="my-3">
                    <FollowingCard avatar_url={avatar_url} username={name} />
                  </li>
                );
              })}
            </ul>
          </Tabs.Content>

          <Tabs.Content value="following">
            <Text size="2">깃허브 팔로잉의 리스트가 보여집니다</Text>
            <ul>
              {followData.followings.map(({ id, avatar_url, login }) => {
                return (
                  <li key={id} className="my-3">
                    <FollowingCard avatar_url={avatar_url} username={login} />
                  </li>
                );
              })}
            </ul>
          </Tabs.Content>

          <Tabs.Content value="followers">
            <Text size="2">깃허브 팔로워의 리스트가 보여집니다</Text>
            <ul>
              {followData.followers.map(({ id, avatar_url, login }) => {
                return (
                  <li key={id} className="my-3">
                    <FollowingCard avatar_url={avatar_url} username={login} />
                  </li>
                );
              })}
            </ul>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  );
};

export default FollowingGrid;
