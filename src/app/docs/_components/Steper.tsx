import { Flex, Separator } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";

type Props = {
  stepIcon: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
};

const Steper = ({ stepIcon, title, description, image }: Props) => {
  return (
    <Flex justify="center" gap="9" className="m-3">
      <Flex gap="2" className="w-[30vw]">
        <Flex direction="column" align="center" gap="2" className="h-[24vh]">
          {stepIcon}
          <Separator orientation="vertical" size="4" />
        </Flex>
        <Flex direction="column" gap="2">
          <div className="font-bold">{title}</div>
          <div>{description}</div>
        </Flex>
      </Flex>
      <div className="w-[25vw] rounded-xl overflow-hidden scale-105">
        <Image src={image} alt="search" className="object-cover" />
      </div>
    </Flex>
  );
};

export default Steper;
