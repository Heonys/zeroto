"use client";
import useUser from "@/hooks/useUser";
import { useSearchParams } from "next/navigation";
import Dashboard from "../components/Dashboard";
import SearchAlert from "../components/SearchAlert";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const {
    userQuery: { data: user, isLoading },
    repositoryQuery: { data: repos },
  } = useUser(username || "");

  if (!username) return <SearchAlert />;

  if (isLoading) return <div>로딩중 ...</div>;

  return <Dashboard user={user} repos={repos} />;
};

export default SearchPage;
