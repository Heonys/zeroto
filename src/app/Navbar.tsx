"use client";
import {
  Avatar,
  Box,
  Card,
  Flex,
  IconButton,
  Kbd,
  Text,
  TextField,
} from "@radix-ui/themes";
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
      {/* <div className="border-1 p-1 border-white rounded-full bg-white flex space-x-2 items-center justify-center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          radius="full"
        />
      </div> */}
    </Flex>
  );
};

export default Navbar;
