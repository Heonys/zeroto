import {
  CommitIcon,
  AlertIcon,
  StarIcon,
  PullRequestIcon,
  ChartIcon,
  FireIcon,
} from "@/app/icon";
import { Card, Flex } from "@radix-ui/themes";
import moment from "moment";

type Props = {
  commits: number;
  stars: number;
  issues: number;
  pullRequests: number;
  contributions: number;
  streak: number;
  create_at: string;
};

const Summary = ({
  commits,
  stars,
  issues,
  pullRequests,
  contributions,
  streak,
  create_at,
}: Props) => {
  const statuses: {
    label: string;
    value: number;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Commits",
      value: commits,
      icon: <CommitIcon size={"1.5vw"} />,
    },
    {
      label: "Issue",
      value: issues,
      icon: <AlertIcon size={"1.5vw"} />,
    },
    {
      label: "Star",
      value: stars,
      icon: <StarIcon size={"1.4vw"} />,
    },
    {
      label: "Pull Requests",
      value: pullRequests,
      icon: <PullRequestIcon size={"1.5vw"} />,
    },
  ];

  const statusesSecond: {
    label: string;
    value: number;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Total Contributions",
      value: contributions,
      icon: <ChartIcon size={"1.5vw"} />,
    },
    {
      label: "Current Streak",
      value: streak,
      icon: <FireIcon size={"1.5vw"} />,
    },
  ];

  return (
    <>
      <Flex gap="4">
        {statuses.map(({ value, label, icon }) => {
          return (
            <Card key={label} className="grow ">
              <Flex align="center" justify="between">
                <Flex direction="column" gap="1">
                  <div className="text-[1.05vw] font-medium">{label}</div>
                  <div className="font-bold text-[1.05vw]">{value}</div>
                </Flex>
                {icon}
              </Flex>
            </Card>
          );
        })}
      </Flex>
      <Flex gap="4">
        {statusesSecond.map(({ value, label, icon }) => {
          return (
            <Card key={label} className="grow ">
              <Flex align="center" justify="between">
                <Flex direction="column" gap="1">
                  <div className="text-[1.05vw] font-medium">{label}</div>
                  <div className="font-bold text-[1.05vw]">{`${label === "Current Streak" ? `${value} days` : `${value} (${moment(create_at).format("YYYY-MM-DD")} ~ Present)`}`}</div>
                </Flex>
                {icon}
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

export default Summary;
