"use client";
import useFollow from "@/hooks/useFollow";
import FollowingCard from "./FollowingCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Flex, Tabs } from "@radix-ui/themes";
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
    <Flex direction="column" className="p-[0.5vw]">
      <Tabs.Root defaultValue="likes">
        <Tabs.List size="2">
          <Tabs.Trigger value="likes">
            <Flex gap="1" align="center">
              <StarIcon size={"1.1vw"} />
              <div className="font-bold text-[0.85vw]">Likes</div>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="following">
            <Flex gap="1" align="center">
              <GithubIcon size={"1.1vw"} />
              <div className="font-bold text-[0.85vw]">Github Follwing</div>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="followers">
            <Flex gap="1" align="center">
              <GithubIcon size={"1.1vw"} />
              <div className="font-bold text-[0.85vw]"> Github Followers</div>
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>

        <div className="max-h-[70vh] overflow-y-scroll p-[1vw]">
          <Tabs.Content value="likes">
            <div className="text-[0.95vw]">
              좋아요를 누른 유저의 리스트가 보여집니다
            </div>
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
            <div className="text-[0.95vw]">
              깃허브 팔로잉의 리스트가 보여집니다
            </div>
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
            <div className="text-[0.95vw]">
              깃허브 팔로워의 리스트가 보여집니다
            </div>
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
        </div>
      </Tabs.Root>
    </Flex>
  );
};

export default FollowingGrid;
