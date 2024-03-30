"use client";
import useSearch from "@/hooks/useSearch";
import { useSearchParams } from "next/navigation";
import Dashboard from "@/app/components/Dashboard";
import SearchAlert from "@/app/components/SearchAlert";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import NotFoundPage from "@/app/not-found";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const { data: session } = useSession();
  const loginedUser = session?.user;

  const {
    userQuery: { data: user, isError: isUserError },
    userContributionQuery: { data: contributaion },
    userStreak: { data: streak },
    repositoryQuery: { data: repos },
  } = useSearch(username || "");

  if (!username) return <SearchAlert />;
  if (isUserError) return <NotFoundPage />;
  if (!user || !contributaion || streak == null) return <LoadingSpinner />;

  return (
    <Dashboard
      isLogin={!!loginedUser}
      me={user?.login === loginedUser?.username ? true : false}
      user={user}
      repos={repos}
      contributaion={contributaion}
      streak={streak!}
    />
  );
};

export default SearchPage;
