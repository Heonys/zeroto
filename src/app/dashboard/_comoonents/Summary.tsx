import { RepositoryIcon, CommitIcon, AlertIcon } from "@/app/icon";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  open: number;
  inProgress: number;
  closed: number;
  starred?: number;
  repos?: number;
};

const IssueSummary = ({ open, closed, inProgress }: Props) => {
  const statuses: {
    label: string;
    value: number;
    status: string;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Commit",
      value: open,
      status: "OPEN",
      icon: <CommitIcon size={25} />,
    },
    {
      label: "Issue",
      value: inProgress,
      status: "IN_PROGRESS",
      icon: <AlertIcon size={25} />,
    },
    {
      label: "Repository",
      value: closed,
      status: "CLOSED",
      icon: <RepositoryIcon size={25} />,
    },
  ];

  return (
    <Flex gap="4">
      {statuses.map(({ value, label, status, icon }) => {
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
