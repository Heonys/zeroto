"use client";
import { Flex, IconButton, Kbd, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { SearchIcon } from "./icon";
import RecentSearchAvatar from "./components/RecentSearchAvatar";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
  return (
    <Flex justify="between" className="h-[6vh]" align="center">
      <div className="flex space-x-2">
        <TextField.Root radius="full">
          <TextField.Slot>
            <SearchIcon size={15} />
          </TextField.Slot>
          <TextField.Input size="2" placeholder="Search Github User" />
          <TextField.Slot>
            <IconButton size="1" variant="ghost">
              <Kbd>Enter</Kbd>
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <RecentSearchAvatar />
        <RecentSearchAvatar />
        <RecentSearchAvatar />
      </div>
      <AuthStatus />
    </Flex>
  );
};

export default Navbar;
