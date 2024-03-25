"use client";
import { Flex, Text } from "@radix-ui/themes";
import LogoIcon from "./LogoIcon";
import { BellIcon } from "../icon";
import Github from "../../../public/github.webp";
import Image from "next/image";
import Search from "./Search";

const SearchAlert = () => {
  return (
    <Flex
      justify="center"
      direction="column"
      gap="3"
      align="center"
      className="max-w-[60vw] mx-auto mt-4 h-full w-[57%]"
    >
      <LogoIcon />
      <Search />
      <Flex align="center" gap="2">
        <BellIcon size={"1vw"} color="#926715" />
        <div className="text-[#647389] text-[1vw]">
          사용자 이름이 아닌 깃허브 아이디로 검색해주세요
        </div>
      </Flex>
      <Image src={Github} alt="github" layout="responsive" />
    </Flex>
  );
};

export default SearchAlert;
