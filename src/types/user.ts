export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  image?: string;
  username: string;
};

export type GithubURL = {
  avatar_url: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  html_url: string;
  id: string;
  location: string;
  login: string;
  name: string;
  public_repos: string;
  repos_url: string;
};
