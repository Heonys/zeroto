"use client";

import { IconButton, Kbd, TextField } from "@radix-ui/themes";
import { SearchIcon } from "../icon";
import RecentSearchAvatar from "./RecentSearchAvatar";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { userSelector } from "@/atom/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { DiHtml53DEffects } from "react-icons/di";

const NavBarForm = () => {
  const [username, setUsename] = useState("");
  const router = useRouter();
  const searchs = useRecoilValue(userSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsename(e.target.value);
  };

  const handleClickEnter = () => {
    router.push(`/search?username=${username}`);
  };

  return (
    <div className="flex space-x-2">
      <TextField.Root radius="full">
        <TextField.Slot>
          <SearchIcon size={15} />
        </TextField.Slot>
        <TextField.Input
          size="2"
          placeholder="Search Github"
          value={username}
          onChange={handleChange}
        />
        <TextField.Slot>
          <IconButton size="1" variant="ghost" onClick={handleClickEnter}>
            <Kbd>Enter</Kbd>
          </IconButton>
        </TextField.Slot>
      </TextField.Root>
      {searchs.map(({ username, avatar_url }) => {
        return (
          <RecentSearchAvatar
            key={username}
            username={username}
            avatar_url={avatar_url}
          />
        );
      })}
    </div>
  );
};

export default NavBarForm;
