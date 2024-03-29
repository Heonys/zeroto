"use client";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const Cloudinary = () => {
  const url = getCldImageUrl({
    src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1711725900/1.webp`,
  });
  return (
    <Image
      width="960"
      height="600"
      src={url}
      sizes="100vw"
      alt="Description of my image"
    />
  );
};

export default Cloudinary;
