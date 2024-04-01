"use client";
import useMe from "@/hooks/useMe";
import Dashboard from "@/app/components/Dashboard";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Weeks } from "@/types/user";

const MyDashboardPage = () => {
  const {
    userQuery: { data: user },
    userContributionQuery: { data: contributaion },
    userStreak: { data: streak },
    calendarQuery: { data: calendar },
    repositoryQuery: { data },
  } = useMe();

  if (!user || !calendar || !contributaion || streak == null)
    return <LoadingSpinner />;

  const weeks: Weeks[] =
    calendar.contributionsCollection.contributionCalendar.weeks;

  return (
    <Dashboard
      isLogin={true}
      me={true}
      user={user}
      repos={data}
      contributaion={contributaion}
      streak={streak}
      weeks={weeks}
    />
  );
};

export default MyDashboardPage;
