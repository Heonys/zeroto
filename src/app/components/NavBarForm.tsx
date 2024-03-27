"use client";
import { IconButton, Kbd, TextField } from "@radix-ui/themes";
import { SearchIcon } from "../icon";
import RecentSearchAvatar from "./RecentSearchAvatar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { userAtom } from "@/atom/userAtom";
import { useRecoilState } from "recoil";
import { useQueryClient } from "@tanstack/react-query";

const NavBarForm = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [searchs, setSearch] = useRecoilState(userAtom);
  const queryClient = useQueryClient();

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

  const onDelete = (username: string) => {
    setSearch((prev) => prev.filter((v) => v.username !== username));
    queryClient.removeQueries({ queryKey: ["search", username], exact: true });
  };

  return (
    <div className="flex space-x-2">
      <TextField.Root radius="full">
        <TextField.Slot>
          <SearchIcon size={"1vw"} />
        </TextField.Slot>
        <TextField.Input
          size="2"
          placeholder="Quick search..."
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
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default NavBarForm;
