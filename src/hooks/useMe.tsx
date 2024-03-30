import type { Repository, UserStats } from "@/octokit/fetcher";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {
  const userQuery = useQuery<UserStats>({
    queryKey: ["me"],
    queryFn: () => fetch("/api/me").then((res) => res.json()),
  });

  const repositoryQuery = useQuery<Repository[]>({
    queryKey: ["me", "repos"],
    queryFn: async () => fetch("/api/me/repos").then((res) => res.json()),
  });

  return { userQuery, repositoryQuery };
};

export default useMe;
