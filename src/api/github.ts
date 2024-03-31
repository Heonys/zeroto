import { getTotalCommit, getCalendar } from "@/octokit/fetcher";
import { GtihubCommit } from "@/types/user";
import { OneYearByFromto } from "@/util/common";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const config = {
  headers: { Authorization: `token ${token}` },
};

export async function getUserByUsername(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}`,
    config,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getRepositorysByUsername(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getCommitByURL(url: string) {
  try {
    const response = await fetch(url.replace("{/sha}", ""), config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: GtihubCommit[] = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export async function getIssueByURL(url: string) {
  try {
    const response = await fetch(url.replace("{/number}", ""), config);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: any[] = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}

export async function getFollowingByUsername(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/following`,
    config,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getFollowersByUsername(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/followers`,
    config,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getFollowByUsername(username: string) {
  const followings = await getFollowingByUsername(username);
  const followers = await getFollowersByUsername(username);

  return { followers, followings };
}

export async function getTotalContributions(
  username: string,
  create_at: string,
) {
  const fromtoArray = OneYearByFromto(create_at);
  const allContributions: any = (
    await Promise.allSettled(
      fromtoArray.map(({ from, to }) => {
        return getTotalCommit(username, from, to);
      }),
    )
  ).filter((v) => v.status === "fulfilled");

  return allContributions
    .map((v: any) => {
      return Object.values<number>(v?.value.contributionsCollection).reduce(
        (acc, cur) => acc + cur,
        0,
      );
    })
    .reduce((acc: number, cur: number) => acc + cur, 0);
}

export async function getStreak(username: string) {
  const data: any = await getCalendar(username);

  const flatted: any[] = data.contributionsCollection.contributionCalendar.weeks
    .flat()
    .map((v: any) => v.contributionDays)
    .flat();

  const lastContribution = flatted.findLastIndex((v, i) => {
    return i !== flatted.length - 1 && v.contributionLevel === "NONE";
  });

  return flatted.length - 1 - lastContribution;
}
