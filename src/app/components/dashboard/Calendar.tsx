import { Grid } from "@radix-ui/themes";
import CalendarRow from "./CalendarRow";
import { Weeks } from "@/types/user";

type Props = {
  weeks: Weeks[];
};

const Calendar = ({ weeks }: Props) => {
  return (
    <div className="min-w-[55vw]">
      <Grid columns="64" gap="2">
        {weeks.map((v, index) => {
          return (
            <CalendarRow key={index} contributionCount={v.contributionDays} />
          );
        })}
      </Grid>
    </div>
  );
};

export default Calendar;
