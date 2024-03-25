"use client";
import { RepositoryIcon, SearchIcon } from "@/app/icon";
import { GithubRepositorys } from "@/types/user";
import { Heading, TextField } from "@radix-ui/themes";
import RepositoryCard from "./RepositoryCard";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

type Props = {
  repositoryData: GithubRepositorys[];
};

const RepositoryGrid = ({ repositoryData }: Props) => {
  const [keyword, setKeyword] = useState("");
  const debounceKeyword = useDebounce(keyword, 500);

  const filterRepositories = (repos: GithubRepositorys[]) => {
    return repos.filter((repo) =>
      repo.name.toLowerCase().includes(debounceKeyword.toLowerCase()),
    );
  };

  const filteredRepositoryData = debounceKeyword
    ? filterRepositories(repositoryData)
    : repositoryData;

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="px-2 pt-2 max-h-[55vh] overflow-y-scroll overflow-x-hidden ">
      <Heading
        size="4"
        mb="5"
        className="flex items-center gap-2 justify-between"
      >
        <div className="flex items-center text-[1.15vw]">
          <RepositoryIcon size={"1.3vw"} className="mr-1" />
          <div>Repository</div>
          <span>{`(${repositoryData.length})`}</span>
        </div>
        <TextField.Root>
          <TextField.Slot>
            <SearchIcon />
          </TextField.Slot>
          <TextField.Input
            placeholder="Search Repository"
            value={keyword}
            onChange={handleClick}
          />
        </TextField.Root>
      </Heading>

      {filteredRepositoryData.map((repo) => {
        return (
          <RepositoryCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            html_url={repo.html_url}
          />
        );
      })}
    </div>
  );
};

export default RepositoryGrid;
