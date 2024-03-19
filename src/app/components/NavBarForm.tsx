"use client";
import { IconButton, Kbd, TextField } from "@radix-ui/themes";
import { SearchIcon } from "../icon";
import RecentSearchAvatar from "./RecentSearchAvatar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { userSelector } from "@/atom/userAtom";
import { useRecoilValue } from "recoil";

const NavBarForm = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const searchs = useRecoilValue(userSelector);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClickEnter = () => {
    router.push(`/search?username=${username}`);
    setUsername("");
  };

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      router.push(`/search?username=${username}`);
      setUsername("");
    }
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
          onKeyDown={handleKeydown}
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
