import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userAddSelector } from "@/atom/userAtom";
import {
  type UserStats,
  type Repository,
  getCalendar,
} from "@/octokit/fetcher";
import { getStreak, getTotalContributions } from "@/api/github";

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

  const userContributionQuery = useQuery({
    enabled: !!userQuery.data,
    queryKey: [username, "contributation"],
    queryFn: () =>
      getTotalContributions(userQuery.data!.login, userQuery.data!.created_at),
  });

  const userStreak = useQuery({
    enabled: !!userQuery.data,
    queryKey: [username, "streak"],
    queryFn: () => getStreak(userQuery.data!.login),
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

  const calendarQuery = useQuery<any>({
    enabled: !!userQuery.data,
    queryKey: [username, "calendar"],
    queryFn: () => getCalendar(userQuery.data!.login),
  });

  return {
    userQuery,
    repositoryQuery,
    userContributionQuery,
    userStreak,
    calendarQuery,
  };
};

export default useSearch;
