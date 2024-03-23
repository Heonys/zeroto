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
    <Flex justify="center" gap="9" className="m-4">
      <Flex gap="2" className="w-[30vw]">
        <Flex direction="column" align="center" gap="2">
          {stepIcon}
          <Separator orientation="vertical" size="4" />
        </Flex>
        <Flex direction="column" gap="2">
          <div className="font-bold">{title}</div>
          <h1>{header}</h1>
          <div>{description}</div>
        </Flex>
      </Flex>
      <div className="w-[35vw] rounded-xl overflow-hidden scale-105">
        <Image src={image} alt="search" className="object-cover" />
      </div>
    </Flex>
  );
};

export default Steper;
