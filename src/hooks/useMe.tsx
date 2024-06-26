import {
  getCalendar,
  type Repository,
  type UserStats,
} from "@/octokit/fetcher";
import { useQuery } from "@tanstack/react-query";
import { getTotalContributions, getStreak } from "@/api/github";

const useMe = () => {
  const userQuery = useQuery<UserStats>({
    queryKey: ["me"],
    queryFn: () => fetch("/api/me").then((res) => res.json()),
  });

  const userContributionQuery = useQuery({
    enabled: !!userQuery.data,
    queryKey: ["me", "contributation"],
    queryFn: () =>
      getTotalContributions(userQuery.data!.login, userQuery.data!.created_at),
  });

  const userStreak = useQuery({
    enabled: !!userQuery.data,
    queryKey: ["me", "streak"],
    queryFn: () => getStreak(userQuery.data!.login),
  });

  const repositoryQuery = useQuery<Repository[]>({
    queryKey: ["me", "repos"],
    queryFn: async () => fetch("/api/me/repos").then((res) => res.json()),
  });

  const calendarQuery = useQuery<any>({
    enabled: !!userQuery.data,
    queryKey: ["me", "calendar"],
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

export default useMe;
