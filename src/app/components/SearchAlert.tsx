"use client";
import { Flex, IconButton, Kbd, Text, TextField } from "@radix-ui/themes";
import LogoIcon from "./LogoIcon";
import { BellIcon, SearchIcon } from "../icon";
import Github from "../../../public/github.webp";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchAlert = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClickEnter = () => {
    router.push(`/search?username=${username}`);
  };

  return (
    <Flex
      justify="center"
      direction="column"
      gap="3"
      align="center"
      className="max-w-[60vw] m-auto mt-4"
    >
      <LogoIcon />
      <TextField.Root className="w-[50%]">
        <TextField.Slot>
          <SearchIcon />
        </TextField.Slot>
        <TextField.Input
          size="2"
          placeholder="Search GitHub"
          className="w-full"
          radius="large"
          value={username}
          onChange={handleChange}
        />
        <TextField.Slot>
          <IconButton size="1" variant="ghost" onClick={handleClickEnter}>
            <Kbd>Enter</Kbd>
          </IconButton>
        </TextField.Slot>
      </TextField.Root>

      <Flex align="center" gap="2">
        <BellIcon size={15} color="#926715" />
        <Text className="text-[#647389]">
          사용자 이름이 아닌 깃허브 아이디로 검색해주세요
        </Text>
      </Flex>
      <Image src={Github} alt="github" />
    </Flex>
  );
};

export default SearchAlert;
