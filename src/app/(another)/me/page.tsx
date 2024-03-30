"use client";
import useMe from "@/hooks/useMe";
import Dashboard from "@/app/components/Dashboard";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const MyDashboardPage = () => {
  const {
    userQuery: { data: user },
    userContributionQuery: { data: contributaion },
    userStreak: { data: streak },
    repositoryQuery: { data },
  } = useMe();

  if (!user || !contributaion || streak == null) return <LoadingSpinner />;

  return (
    <Dashboard
      isLogin={true}
      me={true}
      user={user}
      repos={data}
      contributaion={contributaion}
      streak={streak}
    />
  );
};

export default MyDashboardPage;
