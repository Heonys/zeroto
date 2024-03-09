"use client";
import { Avatar, Flex, TextField } from "@radix-ui/themes";
import React from "react";
import { SearchIcon, MenuIcon } from "./icon";

const Navbar = () => {
  return (
    <Flex justify="between" className="h-[6vh]" align="center">
      <div>
        <TextField.Root radius="full">
          <TextField.Slot>
            <SearchIcon size={15} />
          </TextField.Slot>
          <TextField.Input size="2" placeholder="Search the docs…" />
        </TextField.Root>
      </div>
      <div className="border-1 p-1 border-white rounded-full bg-white flex space-x-2 items-center justify-center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          radius="full"
        />
      </div>
    </Flex>
  );
};

export default Navbar;
