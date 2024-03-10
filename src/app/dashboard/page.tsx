"use client";
import Image from "next/image";
import Profile from "/public/profile.png";
import { PeopleIcon, LocatoinIcon } from "../icon";
import useMe from "@/hooks/useMe";

const DashboardPage = () => {
  const {
    query: { data, isLoading },
  } = useMe();

  if (isLoading) return null;

  console.log(data);

  // "https://avatars.githubusercontent.com/u/63222205?v=4"
  return (
    <div className="w-full h-full">
      <div className="absolute  w-[18vw] left-[3vw] top-[10vh] bg-white flex flex-col items-start">
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
        </div>
      </div>
      <div className="relative bg-blue-100 opacity-50 left-[23vw] w-[69vw] h-[82vh]"></div>
    </div>
  );
};

export default DashboardPage;
