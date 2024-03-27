import { Flex, Separator } from "@radix-ui/themes";
import { StaticImageData } from "next/image";
import SteperImage from "./SteperImage";

type Props = {
  stepIcon: React.ReactNode;
  title: string;
  header: string;
  image: StaticImageData;
  description: React.ReactNode;
};

const Steper = ({ stepIcon, title, header, description, image }: Props) => {
  return (
    <Flex justify="center" gap="9" className="m-[2vh]">
      <Flex gap="2" className="w-[30vw]">
        <Flex direction="column" align="center" gap="2">
          {stepIcon}
          <Separator orientation="vertical" size="4" />
        </Flex>
        <Flex direction="column" gap="2">
          <div className="font-bold text-[1.1vw] ">{title}</div>
          <h1 className="text-[1.1vw]">{header}</h1>
          <div className="text-[1.1vw]">{description}</div>
        </Flex>
      </Flex>
      <SteperImage image={image} />
    </Flex>
  );
};

export default Steper;
