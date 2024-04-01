"use client";
import { getCalendar } from "@/octokit/fetcher";
import Calendar from "../../../components/dashboard/Calendar";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Weeks } from "@/types/user";

const Stats = () => {
  return null;
  // return <div>{weeks && <Calendar weeks={weeks} />}</div>;
};

export default Stats;
