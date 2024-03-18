"use client";
import useMe from "@/hooks/useMe";
import Dashboard from "../components/Dashboard";

const MyDashboardPage = () => {
  const {
    userQuery: { data: user, isLoading },
    repositoryQuery: { data },
  } = useMe();

  if (isLoading) return null;

  return <Dashboard user={user} repos={data} />;
};

export default MyDashboardPage;
