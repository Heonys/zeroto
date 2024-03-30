import { FireIcon, ChartIcon } from "@/app/icon";
import { Card, Flex } from "@radix-ui/themes";
import moment from "moment";

type Props = {
  contributions: number;
  streak: number;
  create_at: string;
};

const SummarySecond = ({ contributions, streak, create_at }: Props) => {
  const statuses: {
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
    <Flex gap="4">
      {statuses.map(({ value, label, icon }) => {
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
  );
};

export default SummarySecond;
