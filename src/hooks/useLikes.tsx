"use client";
import { AuthType, LikesType } from "@/types/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type MutationType = {
  name: string;
  avatar_url: string;
};

const useLikes = () => {
  const queryClient = useQueryClient();
  const queryKey = ["auth"];

  const authQuery = useQuery<AuthType>({
    queryKey,
    queryFn: async () => {
      const res = await fetch("/api/likes");
      return await res.json();
    },
  });

  const likesMutation = useMutation({
    mutationFn: async ({ name, avatar_url }: MutationType) => {
      const res = await fetch("/api/likes", {
        method: "PATCH",
        body: JSON.stringify({ name, avatar_url }),
      });
      return await res.json();
    },
    onMutate: async ({ name }: MutationType) => {
      const previousUser = queryClient.getQueryData<AuthType>(queryKey);

      queryClient.setQueryData<AuthType>(queryKey, (old) => ({
        ...(old as AuthType),
        likes: [{ name, avatar_url: "" }],
      }));

      return { previousUser };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const unLikesMutation = useMutation({
    mutationFn: async ({ name, avatar_url }: MutationType) => {
      const res = await fetch("/api/unlike", {
        method: "PATCH",
        body: JSON.stringify({ name, avatar_url }),
      });
      return await res.json();
    },
    onMutate: async ({ name }: MutationType) => {
      const previousUser = queryClient.getQueryData<AuthType>(queryKey);

      queryClient.setQueryData<AuthType>(queryKey, (old) => ({
        ...(old as AuthType),
        likes: (old?.likes as LikesType[]).filter((v) => v.name !== name),
      }));

      return { previousUser };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { authQuery, likesMutation, unLikesMutation };
};

export default useLikes;
