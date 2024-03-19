import Github from "@/../public/notfound.png";
import Message from "@/../public/404Message.png";
import Background from "@/../public/background.jpeg";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";

const NotFoundLayout = () => {
  return (
    <Flex
      className="relative top-[50%] -translate-y-[50%]"
      justify="center"
      align="center"
    >
      <Image src={Background} alt="Background" className="absolute w-full" />
      <Image src={Message} alt="Message" className="z-10" />
      <Image src={Github} alt="githubimage" className="z-10" />
    </Flex>
  );
};

export default NotFoundLayout;
