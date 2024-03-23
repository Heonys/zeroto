import { getServerSession } from "next-auth";
import authOption from "@/app/api/auth/[...nextauth]/authOptions";
import FollowingGrid from "./_components/FollowingGrid";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const StarredPage = async () => {
  const session = await getServerSession(authOption);
  const username = session?.user.username;

  if (!username) return <LoadingSpinner />;

  return <FollowingGrid usernmae={username} />;
};

export default StarredPage;
