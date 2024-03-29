"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import HeroButtonGroup from "./HeroButtonGroup";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import useLoaded from "@/hooks/useLoaded";

const HeroMotion = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll();
  const { status } = useSession();
  const totalRatio = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const { isLoaded } = useLoaded();
  const [images, setImages] = useState<any[]>([]);

  const preloadImages = () => {
    for (let i = 1; i < 81; i++) {
      const url = getCldImageUrl({
        src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1711725900/${i}.webp`,
      });
      setImages((prev) => [...prev, url]);
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentIndex(Math.round(totalRatio.get() * 79) + 1);
  });

  if (!isLoaded || status === "loading") {
    return (
      <>
        <div className="sticky top-[50%]">
          <LoadingSpinner />
        </div>
        <div className="h-[100vh]"></div>
      </>
    );
  }

  return (
    <div className="h-[200vh]">
      <div className="sticky top-0 flex justify-between items-center">
        <div className="relative left-[7%] z-[100] text-white flex flex-col space-y-[2.5vh]">
          <div className="font-semibold text-[2.5vw] max-w-[50vw] leading-tight scale-125 translate-x-[3vw]">
            {isLoaded ? "true" : "false"}
            <div>Over 100 million developers call GitHub home</div>
          </div>
          <div className="text-[1.1vw] font-thin max-w-[50vw]">
            Whether scaling your startup or learning to code, GitHub is your
            home. Join the world’s largest developer platform to build
            innovations empowering humanity.
          </div>
          <HeroButtonGroup />
        </div>
        <motion.div className="overflow-hidden ">
          <Image
            width="960"
            height="600"
            src={images[currentIndex - 1]}
            layout="responsive"
            className="translate-x-[4vw] translate-y-[5vh] z-50"
            alt={`octocat${currentIndex}`}
            priority={true}
            ref={ref}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMotion;
