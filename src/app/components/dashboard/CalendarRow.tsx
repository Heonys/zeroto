import { Flex } from "@radix-ui/themes";
import CalendarCell from "./CalendarCell";
import { ContributionCount } from "@/types/user";

type Props = {
  contributionCount: ContributionCount[];
};

const CalendarRow = ({ contributionCount }: Props) => {
  return (
    <Flex direction="column" gap="1">
      {contributionCount.map(
        ({ date, contributionCount, contributionLevel }) => {
          return (
            <CalendarCell
              key={date}
              date={date}
              contributionCount={contributionCount}
              contributionLevel={contributionLevel}
            />
          );
        },
      )}
    </Flex>
  );
};

export default CalendarRow;
