/* eslint-disable @next/next/no-img-element */
import { Flex } from "@radix-ui/themes";

type Props = {
  username: string;
};

const Graph = ({ username }: Props) => {
  return (
    <Flex gap="5" justify="between" align="center" className="p-2">
      <div className="">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}
          alt="git"
          className="w-[17vw]"
        />
      </div>
      <div className="grow ">
        <img
          src={`https://ghchart.rshah.org/d82e5a/${username}`}
          alt="graph"
          className="w-[40vw]"
        />
      </div>
    </Flex>
  );
};

export default Graph;
