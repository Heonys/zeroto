"use client";
import { CloseRIcon, CloseOIcon, CloseFillIcon } from "@/app/icon";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
};

const SteperImage = ({ image }: Props) => {
  return (
    <AnimatePresence>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="w-[35vw] rounded-2xl overflow-hidden scale-105">
            <Image src={image} alt="search" className="object-cover" />
          </div>
        </Dialog.Trigger>
        <Dialog.Content
          size="2"
          style={{
            width: "100%",
            maxWidth: "90vw",
            height: "100%",
            maxHeight: "95vh",
          }}
          className="relative overflow-hidden"
        >
          <Dialog.Description size="4" className="p-2">
            <Image
              src={image}
              alt="search"
              className="object-cover w-full h-full"
            />
          </Dialog.Description>

          <div className="absolute top-0 right-0 ">
            <Dialog.Close>
              <CloseFillIcon size={"1.8vw"} />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </AnimatePresence>
  );
};

export default SteperImage;
