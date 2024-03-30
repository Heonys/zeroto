import { fetcher } from "@/octokit/octokit";
import {
  statsQuery,
  repositoryQuery,
  totalCommitQuery,
  contributionCalendarQuery,
  userInfoQuery,
} from "./query";

export type UserStats = {
  avatar_url: string;
  commits: number;
  contributedTo: number;
  created_at: string;
  followers: number;
  following: number;
  gists: number;
  html_url: string;
  issues: number;
  login: string;
  name: string;
  organizations: number;
  pullRequests: number;
  repositories: number;
  sponsoring: number;
  totalStars: number;
  updated_at: string;
};

export const getStats = (username: string) => {
  const stats: UserStats = {} as UserStats;
  return new Promise<UserStats>((resolve, reject) => {
    fetcher(statsQuery, username)
      .then((response: any) => {
        const data = response.user;
        stats.name = data.name;
        stats.login = data.login;
        stats.avatar_url = data.avatarUrl;
        stats.html_url = data.url;
        stats.following = data.following.totalCount;
        stats.followers = data.followers.totalCount;
        stats.gists = data.gists.totalCount;
        stats.commits = data.contributionsCollection.totalCommitContributions;
        stats.contributedTo = data.repositoriesContributedTo.totalCount;
        stats.pullRequests = data.pullRequests.totalCount;
        stats.issues = data.issues.totalCount;
        stats.repositories = data.repositories.totalCount;
        stats.organizations = data.organizations.totalCount;
        stats.sponsoring = data.sponsoring.totalCount;
        stats.created_at = data.createdAt;
        stats.updated_at = data.updatedAt;
        // eslint-disable-next-line max-len
        stats.totalStars = data.repositories.nodes.reduce(
          (total: any, current: any) => total + current.stargazers.totalCount,
          0,
        );
        resolve(stats);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export type Repository = {
  id: string;
  description: string;
  forks: { totalCount: number };
  issues: { totalCount: number };
  name: string;
  primaryLanguage: { name: string; color: string };
  stargazers: { totalCount: number };
  url: string;
};

export const getRepos = (username: string) => {
  return new Promise<Repository[]>((resolve, reject) => {
    fetcher(repositoryQuery, username)
      .then((response: any) => {
        const data = response.user;
        const edges = data.repositories.edges;
        const repos: Repository[] = edges.map((repo: any) => repo.node);
        resolve(repos);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserInfo = (username: string) => {
  return new Promise((resolve, reject) => {
    fetcher(userInfoQuery, username)
      .then((response: any) => {
        const data = response.user;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTotalCommit = (username: string, from: string, to: string) => {
  return new Promise((resolve, reject) => {
    fetcher(totalCommitQuery, username, from, to)
      .then((response: any) => {
        const data = response.user;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCalendar = (username: string) => {
  return new Promise((resolve, reject) => {
    fetcher(contributionCalendarQuery, username)
      .then((response: any) => {
        const data = response.user;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
