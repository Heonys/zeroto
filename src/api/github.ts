const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const config = {
  headers: { Authorization: `token ${token}` },
};

async function getUserByUsername(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}`,
    config,
  );
  const data = await response.json();
  return data;
}

export { getUserByUsername };
