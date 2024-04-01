/* eslint-disable @next/next/no-img-element */
import Calendar from "@/app/components/dashboard/Calendar";
import { Weeks } from "@/types/user";
import { Flex } from "@radix-ui/themes";

type Props = {
  username: string;
  weeks: Weeks[];
};

const Graph = ({ username, weeks }: Props) => {
  return (
    <Flex gap="4" justify="between" align="center" className="p-1 pt-2">
      <div className="min-w-[17vw]">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}
          alt="git"
          className="w-[17vw]"
        />
      </div>
      <div className="grow overflow-hidden">
        <Calendar weeks={weeks} />
      </div>
    </Flex>
  );
};

export default Graph;
