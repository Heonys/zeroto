"use client";
import Image from "next/image";
import {
  PeopleIcon,
  LocatoinIcon,
  CalendarIcon,
  UpdateIcon,
  WebIcon,
} from "../icon";
import useMe from "@/hooks/useMe";
import Chart from "./_comoonents/Chart";
import { Flex, Grid } from "@radix-ui/themes";
import IssueSummary from "./_comoonents/Summary";
import LatestRepos from "./_comoonents/LatestRepos";
import Graph from "./_comoonents/Graph";
import Link from "next/link";

const DashboardPage = () => {
  const {
    query: { data, isLoading },
  } = useMe();

  if (isLoading) return null;

  return (
    <div className="w-full h-full">
      <div className="absolute  w-[19vw] left-[3vw] top-[10vh] bg-white flex flex-col items-start">
        <div className="border-2 border-gray-300 rounded-full overflow-hidden">
          <Image
            src={data?.avatar_url!}
            alt="profile"
            width={250}
            height={250}
          />
        </div>
        <div className="pl-3 flex flex-col space-y-1">
          <h1 className="font-bold text-2xl">{data?.name}</h1>
          <h2 className="text-gray-400 text-lg">{data?.login}</h2>
          <div className="flex space-x-3 items-center">
            <PeopleIcon size={18} />
            <div>{data?.followers} followers</div>
            <div>{data?.following} follwing</div>
          </div>
          <div className="flex space-x-2 items-center">
            <LocatoinIcon size={15} />
            <div>{data?.location}</div>
          </div>
          <div className="flex space-x-2 items-center">
            <CalendarIcon size={18} />
            <div>Joined GitHub 12560 days ago</div>
          </div>
          <div className="flex space-x-2 items-center">
            <UpdateIcon size={20} />
            <div>Last updated 1 days ago</div>
          </div>
          <div className="flex space-x-2 items-center">
            <WebIcon size={20} />
            <Link href={"/#"} className="underline decoration-1">
              View profile on GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* 
        자주 사용하는 언어 및 비율 
        잔디 그리기 -> 모든 저장소 가져와서 
        실제 깃허브에서 보기
        starred 이건 favorite 페이지에서 
        activity
        
        */}
      <div className="relative left-[23vw] w-[69vw] h-[82vh]">
        <Grid columns="2" gap="5">
          <Flex direction="column" gap="5">
            <IssueSummary open={1} inProgress={5} closed={3} />
            <Chart open={1} inProgress={5} closed={3} />
          </Flex>
          <LatestRepos />
        </Grid>
        <Graph />
      </div>
    </div>
  );
};

export default DashboardPage;
