"use client";
import useMe from "@/hooks/useMe";
import Dashboard from "@/app/components/Dashboard";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const MyDashboardPage = () => {
  const {
    userQuery: { data: user, isLoading },
    repositoryQuery: { data },
  } = useMe();

  if (isLoading) return <LoadingSpinner />;

  return <Dashboard isLogin={true} me={true} user={user} repos={data} />;
};

export default MyDashboardPage;
