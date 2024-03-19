import { GithubRepositorys, GithubURL } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { Repos } from "./useMe";
import { getCommitByURL, getIssueByURL } from "@/api/github";
import { useSetRecoilState } from "recoil";
import { userSelector } from "@/atom/userAtom";

const useUser = (username: string) => {
  const setSearch = useSetRecoilState(userSelector);

  const userQuery = useQuery<GithubURL>({
    enabled: !!username,
    queryKey: [username],
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

  const repositoryQuery = useQuery<Repos>({
    enabled: !!username,
    queryKey: [username, "repos"],
    queryFn: async () => {
      const response = await fetch(`/api/user/${username}/repos`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
      }
      const repositoryData: GithubRepositorys[] = await response.json();

      const commitCount = (
        await Promise.all(
          repositoryData.map(async (repo) => {
            const data = await getCommitByURL(repo.commits_url);
            return data.length || 0;
          }),
        )
      ).reduce((acc, cur) => acc + +cur, 0);

      const issueCount = (
        await Promise.all(
          repositoryData.map(async (repo) => {
            const data = await getIssueByURL(repo.issues_url);
            return data.length;
          }),
        )
      ).reduce((acc, cur) => acc + +cur, 0);

      return { repositoryData, commitCount, issueCount };
    },
  });

  return { userQuery, repositoryQuery };
};

export default useUser;
