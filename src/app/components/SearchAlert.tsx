import { Flex } from "@radix-ui/themes";
import LogoIcon from "./LogoIcon";
import { BellIcon } from "../icon";
import Image from "next/image";
import Search from "./Search";
import { github } from "@/asset/image";

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
      <Image
        src={github}
        alt="github"
        layout="responsive"
        width="960"
        height="600"
      />
    </Flex>
  );
};

export default SearchAlert;
