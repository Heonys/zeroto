import { GithubURL } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

const useMe = () => {
  const query = useQuery<GithubURL>({
    queryKey: ["me"],
    queryFn: () => fetch("/api/me").then((res) => res.json()),
  });

  return { query };
};

export default useMe;
