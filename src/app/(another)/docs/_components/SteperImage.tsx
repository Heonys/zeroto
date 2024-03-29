"use client";
import { CloseFillIcon } from "@/app/icon";
import { Dialog } from "@radix-ui/themes";
import Image from "next/image";

type Props = {
  image: string;
};

const SteperImage = ({ image }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="w-[35vw] rounded-2xl overflow-hidden scale-105">
          <Image
            src={image}
            alt="search"
            className="object-cover"
            layout="responsive"
            width="960"
            height="600"
          />
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
            layout="responsive"
            width="960"
            height="600"
          />
        </Dialog.Description>

        <div className="absolute top-0 right-0 ">
          <Dialog.Close>
            <CloseFillIcon size={"1.8vw"} />
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default SteperImage;
