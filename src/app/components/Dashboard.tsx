"use client";
import Chart from "./dashboard/Chart";
import { Flex, Grid } from "@radix-ui/themes";
import Summary from "./dashboard/Summary";
import RepositoryGrid from "./dashboard/RepositoryGrid";
import Graph from "./dashboard/Graph";
import RepositoryGridSkeleton from "./dashboard/RepositoryGridSkeleton";
import type { Repository, UserStats } from "@/octokit/fetcher";
import { Weeks } from "@/types/user";
import DashboardProfile from "./dashboard/DashboardProfile";

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
      <DashboardProfile me={me} isLogin={isLogin} user={user} />
      <div className="relative left-[23vw] w-[69vw]">
        <Grid columns="2" gap="5">
          <Flex direction="column" gap="3">
            <Summary
              {...register}
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
