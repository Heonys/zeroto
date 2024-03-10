"use client";
import Image from "next/image";
import Profile from "/public/profile.png";
import { PeopleIcon, LocatoinIcon } from "../icon";

const DashboardPage = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute  w-[18vw] left-[3vw] top-[10vh] bg-white flex flex-col items-start">
        <div className="border-2 border-gray-300 rounded-full overflow-hidden">
          <Image src={Profile} alt="profile" />
        </div>
        <div className="pl-3 flex flex-col space-y-1">
          <h1 className="font-bold text-2xl">Jiheon Kim</h1>
          <h2 className="text-gray-400 text-lg">Heonys</h2>
          <div className="flex space-x-3 items-center">
            <PeopleIcon size={18} />
            <div>2 followers</div>
            <div>2 follwing</div>
          </div>
          <div className="flex space-x-2 items-center">
            <LocatoinIcon size={15} />
            <div>Republic of Korea</div>
          </div>
        </div>
      </div>
      <div className="relative bg-blue-100 opacity-50 left-[23vw] w-[69vw] h-[82vh]">
        d
      </div>
    </div>
  );
};

export default DashboardPage;
