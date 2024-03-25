import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import { MessageImage, backgroundImage, octocatImage } from "@/asset/image";

const NotFoundLayout = () => {
  return (
    <Flex
      className="relative top-[50%] -translate-y-[50%]"
      justify="center"
      align="center"
    >
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute w-full"
      />
      <Image src={MessageImage} alt="Message" className="z-10" />
      <Image src={octocatImage} alt="githubimage" className="z-10" />
    </Flex>
  );
};

export default NotFoundLayout;
