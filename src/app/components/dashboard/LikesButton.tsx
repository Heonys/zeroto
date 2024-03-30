import { StarFillIcon, StarIcon } from "@/app/icon";
import useLikes from "@/hooks/useLikes";
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
    <div
      className="absolute right-[5%] bottom-[5%] border-2 border-gray-400 rounded-full p-[0.5vw]"
      onClick={handleClick}
    >
      {data?.likes.find((v) => v.name === name) ? (
        <StarFillIcon
          size={"1.5vw"}
          color="orange"
          className="animate-fillStar"
        />
      ) : (
        <StarIcon size={"1.5vw"} />
      )}
    </div>
  );
};

export default LikesButton;
