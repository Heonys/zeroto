import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userAddSelector } from "@/atom/userAtom";
import type { UserStats, Repository } from "@/octokit/fetcher";

const useSearch = (username: string) => {
  const setSearch = useSetRecoilState(userAddSelector);

  const userQuery = useQuery<UserStats>({
    enabled: !!username,
    queryKey: ["search", username],
    queryFn: async () => {
      const response = await fetch(`/api/user/${username}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        return response.json().then((user) => {
          setSearch((prev) => [
            ...prev,
            {
              username: user.login,
              html_for: user.html_url,
              avatar_url: user.avatar_url,
            },
          ]);
          return user;
        });
      }
    },
  });

  const repositoryQuery = useQuery<Repository[]>({
    enabled: !!username,
    queryKey: ["repos", username],
    queryFn: async () => {
      const response = await fetch(`/api/user/${username}/repos`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
      }
      const repositoryData: Repository[] = await response.json();

      return repositoryData;
    },
  });

  return { userQuery, repositoryQuery };
};

export default useSearch;
