"use client";
import useUser from "@/hooks/useUser";
import { useSearchParams } from "next/navigation";
import Dashboard from "../components/Dashboard";
import SearchAlert from "../components/SearchAlert";
import LoadingSpinner from "../components/LoadingSpinner";
import NotFoundPage from "../not-found";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const {
    userQuery: { data: user, isLoading, isError: isUserError },
    repositoryQuery: { data: repos },
  } = useUser(username || "");

  if (!username) return <SearchAlert />;
  if (isLoading) return <LoadingSpinner />;
  if (isUserError) return <NotFoundPage />;

  return <Dashboard user={user} repos={repos} />;
};

export default SearchPage;
