"use client";
import { RepositoryIcon, SearchIcon } from "@/app/icon";
import { Heading, TextField } from "@radix-ui/themes";
import RepositoryCard from "./RepositoryCard";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Repository } from "@/octokit/fetcher";

type Props = {
  repositoryData: Repository[];
};

const RepositoryGrid = ({ repositoryData }: Props) => {
  const [keyword, setKeyword] = useState("");
  const debounceKeyword = useDebounce(keyword, 500);

  const filterRepositories = (repos: Repository[]) => {
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
            language={repo.primaryLanguage?.name}
            color={repo.primaryLanguage?.color}
            html_url={repo.url}
            star={repo.stargazers.totalCount}
            issue={repo.issues.totalCount}
            fork={repo.forks.totalCount}
          />
        );
      })}
    </div>
  );
};

export default RepositoryGrid;
