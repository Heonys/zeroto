"use client";
import { RepositoryIcon, SearchIcon } from "@/app/icon";
import { Flex, Heading, TextField } from "@radix-ui/themes";
import Skeleton from "../Skeleton";

const RepositoryGridSkeleton = () => {
  return (
    <div className="px-2 pt-2 max-h-[55vh] overflow-y-scroll overflow-x-hidden ">
      <Heading
        size="4"
        mb="5"
        className="flex items-center gap-2 justify-between"
      >
        <div className="flex items-center">
          <RepositoryIcon size={20} />
          Repository
        </div>
        <TextField.Root>
          <TextField.Slot>
            <SearchIcon />
          </TextField.Slot>
          <TextField.Input placeholder="Search Repository" />
        </TextField.Root>
      </Heading>

      <Flex direction="column" gap="3">
        <Skeleton height="3.5rem" />
        <Skeleton height="3.5rem" />
        <Skeleton height="3.5rem" />
        <Skeleton height="3.5rem" />
        <Skeleton height="3.5rem" />
      </Flex>
    </div>
  );
};

export default RepositoryGridSkeleton;
