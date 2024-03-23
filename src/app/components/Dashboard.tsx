"use client";
import Image from "next/image";
import { PeopleIcon, CalendarIcon, UpdateIcon, GithubIcon } from "../icon";
import type { Repos } from "@/hooks/useMe";
import Chart from "./dashboard/Chart";
import { Flex, Grid } from "@radix-ui/themes";
import IssueSummary from "./dashboard/Summary";
import RepositoryGrid from "./dashboard/RepositoryGrid";
import Graph from "./dashboard/Graph";
import Link from "next/link";
import { format } from "timeago.js";
import { GithubURL } from "@/types/user";
import RepositoryGridSkeleton from "./dashboard/RepositoryGridSkeleton";
import LikesButton from "./dashboard/LikesButton";

type Props = {
  me: boolean;
  isLogin: boolean;
  user?: GithubURL;
  repos?: Repos;
};

const Dashboard = ({ me, user, repos, isLogin }: Props) => {
  const forkCount = repos?.repositoryData.reduce(
    (acc, cur) => acc + cur.forks_count,
    0,
  );

  const stargazersCount = repos?.repositoryData?.reduce(
    (acc, cur) => acc + cur.stargazers_count,
    0,
  );

  return (
    <div className="w-full h-full">
      <div className="absolute  w-[19vw] left-[3vw] top-[10vh] bg-white flex flex-col items-start">
        <div className="relative">
          <div className="border-2 border-gray-300 rounded-full overflow-hidden z-10">
            <Image
              src={user?.avatar_url!}
              alt="profile"
              width={250}
              height={250}
            />
          </div>
          {!me && isLogin && (
            <LikesButton name={user?.login!} avatar_url={user?.avatar_url!} />
          )}
        </div>
        <div className="pl-3 flex flex-col space-y-1">
          <h1 className="font-bold text-2xl">{user?.name}</h1>
          <h2 className="text-gray-400 text-lg">{user?.login}</h2>
          <div className="flex space-x-3 items-center">
            <PeopleIcon size={18} />
            <div>{user?.followers} followers</div>
            <div>{user?.following} follwing</div>
          </div>
          <div className="flex space-x-2 items-center">
            <CalendarIcon size={18} />
            <div>
              {`Joined GitHub `}
              <span>{format(user?.created_at!)}</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <UpdateIcon size={20} />
            <div>
              {`Last updated `}
              <span>{format(user?.updated_at!)}</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <GithubIcon size={20} />
            <Link
              href={user?.html_url!}
              className="underline decoration-1 font-medium"
            >
              View profile on GitHub
            </Link>
          </div>
        </div>
      </div>

      <div className="relative left-[23vw] w-[69vw] ">
        <Grid columns="2" gap="5">
          <Flex direction="column" gap="5">
            <IssueSummary
              commit={repos?.commitCount || 0}
              fork={forkCount || 0}
              issue={repos?.issueCount || 0}
              star={stargazersCount || 0}
            />
            <Chart
              commit={repos?.commitCount || 0}
              fork={forkCount || 0}
              issue={repos?.issueCount || 0}
              star={stargazersCount || 0}
            />
          </Flex>

          {repos?.repositoryData.length! > 0 ? (
            <RepositoryGrid repositoryData={repos?.repositoryData!} />
          ) : (
            <RepositoryGridSkeleton />
          )}
        </Grid>

        <Graph username={user?.login || ""} />
      </div>
    </div>
  );
};

export default Dashboard;
