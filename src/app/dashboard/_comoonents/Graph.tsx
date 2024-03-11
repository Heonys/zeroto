/* eslint-disable @next/next/no-img-element */
import { Flex } from "@radix-ui/themes";

const Graph = () => {
  return (
    <Flex gap="5" justify="between" align="center" className="p-2">
      <div className="">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=heonys&layout=compact"
          alt="git"
          className="w-[17vw]"
        />
      </div>
      <div className="grow ">
        <img
          src="https://ghchart.rshah.org/d82e5a/heonys"
          alt="graph"
          className="w-[40vw]"
        />
      </div>
    </Flex>
  );
};

export default Graph;
