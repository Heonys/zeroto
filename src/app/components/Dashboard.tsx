"use client";
import Image from "next/image";
import {
  PeopleIcon,
  LocatoinIcon,
  CalendarIcon,
  UpdateIcon,
  WebIcon,
} from "../icon";
import type { Repos } from "@/hooks/useMe";
import Chart from "./dashboard/Chart";
import { Flex, Grid } from "@radix-ui/themes";
import IssueSummary from "./dashboard/Summary";
import RepositoryGrid from "./dashboard/RepositoryGrid";
import Graph from "./dashboard/Graph";
import Link from "next/link";
import { format } from "timeago.js";
import { GithubURL } from "@/types/user";

type Props = {
  user?: GithubURL;
  repos?: Repos;
};

const Dashboard = ({ user, repos }: Props) => {
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
        <div className="border-2 border-gray-300 rounded-full overflow-hidden">
          <Image
            src={user?.avatar_url!}
            alt="profile"
            width={250}
            height={250}
          />
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
            <WebIcon size={20} />
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
              lssue={repos?.issueCount || 0}
              star={stargazersCount || 0}
            />
            <Chart open={1} inProgress={5} closed={3} />
          </Flex>
          <RepositoryGrid repositoryData={repos?.repositoryData || []} />
        </Grid>

        <Graph username={user?.login || ""} />
      </div>
    </div>
  );
};

export default Dashboard;
