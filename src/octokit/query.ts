export const statsQuery = `
query userInfo($login: String!) {
    user(login: $login) {
      name
      login
      avatarUrl
      url
      following{
        totalCount
      }
      followers {
        totalCount
      }
      gists{
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      repositoriesContributedTo(
        first: 1
        contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
      ) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      issues(first:1){
        totalCount
      }
      repositories(
        first: 100
        ownerAffiliations: OWNER
        orderBy: {field: STARGAZERS, direction: DESC}
      ) {
        totalCount
        nodes {
          stargazers {
            totalCount
          }
        }
      }
      organizations(first:1){
        totalCount
      }
      sponsoring(first:1){
        totalCount
      }
      createdAt
      updatedAt
    }
  }
`;

export const repositoryQuery = `
query searchUserRepositories($login: String!) {
  user(login: $login) {
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      edges {
        node {
          id
          name
          description
          primaryLanguage {
            name
            color
          }
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          issues(first:1){
            totalCount
          }
        }
      }
    }
  }
}
`;
