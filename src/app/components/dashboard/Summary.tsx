import {
  RepositoryIcon,
  CommitIcon,
  AlertIcon,
  ForkIcon,
  StarIcon,
} from "@/app/icon";
import { Box, Card, Flex, Text } from "@radix-ui/themes";

type Props = {
  commit: number;
  lssue: number;
  star: number;
  fork: number;
};

const IssueSummary = ({ commit, lssue, star, fork }: Props) => {
  const statuses: {
    label: string;
    value: number;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Commit",
      value: commit,
      icon: <CommitIcon size={25} />,
    },
    {
      label: "Issue",
      value: lssue,
      icon: <AlertIcon size={25} />,
    },
    {
      label: "Star",
      value: star,
      icon: <StarIcon size={22} />,
    },
    {
      label: "Fork",
      value: fork,
      icon: <ForkIcon size={24} />,
    },
  ];

  return (
    <Flex gap="4">
      {statuses.map(({ value, label, icon }) => {
        return (
          <Card key={label} className="grow">
            <Flex align="center" justify="between">
              <Flex direction="column" gap="1">
                <div className="text-sm font-medium">{label}</div>
                <Text size="5" className="font-bold">
                  {value}
                </Text>
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
