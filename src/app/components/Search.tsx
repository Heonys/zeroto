"use client";
import { IconButton, Kbd, TextField } from "@radix-ui/themes";
import { SearchIcon } from "../icon";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

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
        onKeyDown={handleKeydown}
      />
      <TextField.Slot>
        <IconButton size="1" variant="ghost" onClick={handleClickEnter}>
          <Kbd>Enter</Kbd>
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
  );
};

export default Search;
