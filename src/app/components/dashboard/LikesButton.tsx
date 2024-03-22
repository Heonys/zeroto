import { StarFillIcon, StarIcon } from "@/app/icon";
import useLikes from "@/hooks/useLikes";
import { Button } from "@radix-ui/themes";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
  name: string;
  avatar_url: string;
};

const LikesButton = ({ name, avatar_url }: Props) => {
  const {
    authQuery: { data },
    likesMutation,
    unLikesMutation,
  } = useLikes();

  const handleClick = () => {
    if (data?.likes.find((v) => v.name === name)) {
      unLikesMutation.mutate({ name, avatar_url });
    } else {
      likesMutation.mutate({ name, avatar_url });
    }
  };

  if (!data) return <LoadingSpinner />;

  return (
    <Button
      variant="surface"
      className="absolute right-0 bottom-0"
      radius="full"
      highContrast
      onClick={handleClick}
    >
      {data?.likes.find((v) => v.name === name) ? (
        <StarFillIcon size={22} color="orange" className="animate-fillStar" />
      ) : (
        <StarIcon size={22} />
      )}
    </Button>
  );
};

export default LikesButton;
