import { Card, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { StarIcon, ForkIcon, RepositoryIcon } from "@/app/icon";
import RepositoryBadge from "./RepositoryBadge";
import { numFormatter } from "@/util/common";

type Props = {
  name: string;
  description: string;
  language?: string;
  html_url: string;
  star: number;
  issue: number;
  fork: number;
  color: string;
};

const RepositoryCard = ({
  name,
  description,
  language,
  html_url,
  star,
  fork,
  color,
}: Props) => {
  return (
    <Card size="1" className="mb-[1.5vh]">
      <Link href={html_url} target="_blank">
        <Flex align="center" gap="2">
          <RepositoryIcon size={"1.1vw"} />
          <div className="text-[1.1vw] text-[#1067cf] font-semibold mb-1">
            {name}
          </div>
        </Flex>
        <div className="text-[0.8vw] text-gray-600 mb-1">{description}</div>
        <Flex align="center" justify="between">
          <div className="text-[0.8vw]">
            {language && <RepositoryBadge color={color} text={language} />}
          </div>
          <Flex gap="2" align="center">
            <Flex align="center">
              <StarIcon size={"1.1vw"} />
              <div className="text-[0.9vw] font-semibold">
                {numFormatter(star)}
              </div>
            </Flex>
            <Flex align="center">
              <ForkIcon size={"1.1vw"} />
              <div className="text-[0.9vw] font-semibold">
                {numFormatter(fork)}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </Card>
  );
};

export default RepositoryCard;
