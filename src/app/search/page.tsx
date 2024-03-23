"use client";
import useSearch from "@/hooks/useSearch";
import { useSearchParams } from "next/navigation";
import Dashboard from "../components/Dashboard";
import SearchAlert from "../components/SearchAlert";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFoundPage from "../not-found";
import { useSession } from "next-auth/react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const { data: session } = useSession();
  const loginedUser = session?.user;

  const {
    userQuery: { data: user, isLoading, isError: isUserError },
    repositoryQuery: { data: repos },
  } = useSearch(username || "");

  if (!username) return <SearchAlert />;
  if (isLoading) return <LoadingSpinner />;
  if (isUserError) return <NotFoundPage />;

  return (
    <Dashboard
      isLogin={!!loginedUser}
      me={user?.login === loginedUser?.username ? true : false}
      user={user}
      repos={repos}
    />
  );
};

export default SearchPage;
