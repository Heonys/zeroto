import { ContributionCount } from "@/types/user";
import { Tooltip } from "@radix-ui/themes";

const CalendarCell = ({
  date,
  contributionCount,
  contributionLevel,
}: ContributionCount) => {
  let color;

  switch (contributionLevel) {
    case "NONE":
      color = "bg-[#e6e6e6]";
      break;
    case "FIRST_QUARTILE":
      color = "bg-[#f4b4c7]";
      break;
    case "SECOND_QUARTILE":
      color = "bg-[#ec607a]";
      break;
    case "THIRD_QUARTILE":
    case "FOURTH_QUARTILE":
      color = "bg-[#d82e5a]";
      break;
    // color = "bg-[#a62749]";
    // break;
  }

  return (
    <Tooltip content={`${contributionCount} contributions on ${date}`}>
      <div
        className={`${color} w-[0.7vw] h-[0.7vw] hover:scale-125 rounded-sm border-1 shadow-2xl`}
      ></div>
    </Tooltip>
  );
};

export default CalendarCell;
