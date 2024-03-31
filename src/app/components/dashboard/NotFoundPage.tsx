import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import { messageImage, backgroundImage, octocatImage } from "@/asset/image";

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
        layout="responsive"
        width="960"
        height="600"
      />
      <Image
        src={messageImage}
        alt="Message"
        className="z-10"
        width="271"
        height="249"
      />
      <Image
        src={octocatImage}
        alt="githubimage"
        className="z-10"
        width="188"
        height="230"
      />
    </Flex>
  );
};

export default NotFoundLayout;
