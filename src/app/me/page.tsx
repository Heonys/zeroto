"use client";
import useMe from "@/hooks/useMe";
import Dashboard from "../components/Dashboard";
import LoadingSpinner from "../components/LoadingSpinner";

const MyDashboardPage = () => {
  const {
    userQuery: { data: user, isLoading },
    repositoryQuery: { data },
  } = useMe();

  if (isLoading) return <LoadingSpinner />;

  return <Dashboard me={true} user={user} repos={data} />;
};

export default MyDashboardPage;
