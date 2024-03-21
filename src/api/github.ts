import { GtihubCommit } from "@/types/user";

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
  const response = await fetch(url.replace("{/sha}", ""), config);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: GtihubCommit[] = await response.json();
  return data;
}

export async function getIssueByURL(url: string) {
  const response = await fetch(url.replace("{/number}", ""), config);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: any[] = await response.json();
  return data;
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
