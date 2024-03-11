import { getCommitByURL, getIssueByURL } from "@/api/github";
import { GithubRepositorys, GithubURL } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

type Repos = {
  repositoryData: GithubRepositorys[];
  commitCount: number;
  issueCount: number;
};

const useMe = () => {
  const userQuery = useQuery<GithubURL>({
    queryKey: ["me"],
    queryFn: () => fetch("/api/me").then((res) => res.json()),
  });

  const repositoryQuery = useQuery<Repos>({
    queryKey: ["me", "repos"],
    queryFn: async () => {
      const repositoryData: GithubRepositorys[] = await fetch(
        "/api/me/repos",
      ).then((res) => res.json());

      const commitCount = (
        await Promise.all(
          repositoryData.map(async (repo) => {
            const data = await getCommitByURL(repo.commits_url);
            return data.length;
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

export default useMe;
