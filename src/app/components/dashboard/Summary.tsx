import { CommitIcon, AlertIcon, ForkIcon, StarIcon } from "@/app/icon";
import { Card, Flex, Text } from "@radix-ui/themes";

type Props = {
  commit: number;
  issue: number;
  star: number;
  fork: number;
};

const IssueSummary = ({ commit, issue, star, fork }: Props) => {
  const statuses: {
    label: string;
    value: number;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Commit",
      value: commit,
      icon: <CommitIcon size={"1.5vw"} />,
    },
    {
      label: "Issue",
      value: issue,
      icon: <AlertIcon size={"1.5vw"} />,
    },
    {
      label: "Star",
      value: star,
      icon: <StarIcon size={"1.4vw"} />,
    },
    {
      label: "Fork",
      value: fork,
      icon: <ForkIcon size={"1.5vw"} />,
    },
  ];

  return (
    <Flex gap="4">
      {statuses.map(({ value, label, icon }) => {
        return (
          <Card key={label} className="grow ">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <div className="text-[1.05vw] font-medium">{label}</div>
                <text className="font-bold text-[1.05vw]">{value}</text>
              </Flex>
              {icon}
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};

export default IssueSummary;
