import { graphql } from "@octokit/graphql";

const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const fetcher = async (
  query: string,
  login: string,
  from?: string,
  to?: string,
) =>
  new Promise((resolve, reject) => {
    graphql(query, {
      login,
      from,
      to,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
