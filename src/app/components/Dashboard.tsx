"use client";
import Image from "next/image";
import { PeopleIcon, CalendarIcon, UpdateIcon, GithubIcon } from "../icon";
import Chart from "./dashboard/Chart";
import { Flex, Grid } from "@radix-ui/themes";
import Summary from "./dashboard/Summary";
import RepositoryGrid from "./dashboard/RepositoryGrid";
import Graph from "./dashboard/Graph";
import Link from "next/link";
import { format } from "timeago.js";
import RepositoryGridSkeleton from "./dashboard/RepositoryGridSkeleton";
import LikesButton from "./dashboard/LikesButton";
import type { Repository, UserStats } from "@/octokit/fetcher";
import SummarySecond from "./dashboard/SummarySecond";
import { Weeks } from "@/types/user";

type Props = {
  me: boolean;
  isLogin: boolean;
  user?: UserStats;
  repos?: Repository[];
  contributaion: number;
  streak: number;
  weeks: Weeks[];
};

const Dashboard = ({
  me,
  user,
  repos,
  isLogin,
  contributaion,
  streak,
  weeks,
}: Props) => {
  const register = {
    commits: user!.commits,
    stars: user!.totalStars,
    issues: user!.issues,
    pullRequests: user!.pullRequests,
  };

  return (
    <div className="w-full h-full">
      <div className="absolute w-[19vw] left-[3vw] top-[10vh] bg-white flex flex-col items-start">
        <div className="relative">
          <div className="border-2 border-gray-300 rounded-full overflow-hidden z-10 w-[90%]">
            <Image
              src={user?.avatar_url!}
              alt="profile"
              layout="responsive"
              width={250}
              height={250}
            />
          </div>
          {!me && isLogin && (
            <LikesButton name={user?.login!} avatar_url={user?.avatar_url!} />
          )}
        </div>
        <div className="pl-3 flex flex-col space-y-[0.6vh]">
          <h1 className="font-bold text-[1.5vw]">{user?.name}</h1>
          <h2 className="text-gray-400 text-[1.2vw]">@{user?.login}</h2>
          <div className="flex space-x-3 items-center text-[1.1vw]">
            <PeopleIcon size={"1.2vw"} />
            <div>{user?.followers} followers</div>
            <div>{user?.following} follwing</div>
          </div>
          <div className="flex space-x-2 items-center text-[1.05vw]">
            <CalendarIcon size={"1.2vw"} />
            <div>
              {`Joined GitHub `}
              <span>{format(user?.created_at!)}</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center text-[1.05vw]">
            <UpdateIcon size={"1.35vw"} />
            <div>
              {`Last updated `}
              <span>{format(user?.updated_at!)}</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center text-[1.05vw]">
            <GithubIcon size={"1.35vw"} />
            <Link
              href={user?.html_url!}
              className="underline decoration-1 font-medium"
              target="_blank"
            >
              View profile on GitHub
            </Link>
          </div>
        </div>
      </div>

      <div className="relative left-[23vw] w-[69vw]">
        <Grid columns="2" gap="5">
          <Flex direction="column" gap="3">
            <Summary {...register} />
            <SummarySecond
              contributions={contributaion}
              streak={streak}
              create_at={user!.created_at}
            />
            <Chart {...register} />
          </Flex>

          {repos?.length! > 0 ? (
            <RepositoryGrid repositoryData={repos!} />
          ) : (
            <RepositoryGridSkeleton />
          )}
        </Grid>

        <Graph weeks={weeks} username={user?.login || ""} />
      </div>
    </div>
  );
};

export default Dashboard;
