import { Flex, Separator } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";

type Props = {
  stepIcon: React.ReactNode;
  title: string;
  header: string;
  description: string;
  image: StaticImageData;
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
      <div className="w-[35vw] rounded-xl overflow-hidden scale-105">
        <Image src={image} alt="search" className="object-cover" />
      </div>
    </Flex>
  );
};

export default Steper;
