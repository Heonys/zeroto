import { GithubURL } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

type Follow = {
  followings: GithubURL[];
  followers: GithubURL[];
};

const useFollow = (username: string) => {
  const queryKey = ["following", username];

  const userFollowingQuery = useQuery<Follow>({
    queryKey,
    queryFn: async () =>
      fetch(`/api/user/${username}/follow`).then((res) => res.json()),
  });

  return { userFollowingQuery };
};

export default useFollow;
