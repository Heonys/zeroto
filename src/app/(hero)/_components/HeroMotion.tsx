"use client";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import HeroButtonGroup from "./HeroButtonGroup";
import useLoaded from "@/hooks/useLoaded";

const HeroMotion = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll();
  const { status } = useSession();
  const totalRatio = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const { isLoaded } = useLoaded();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentIndex(Math.round(totalRatio.get() * 159) + 1);
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
            src={`/images/${currentIndex}.webp`}
            layout="responsive"
            width={900}
            height={675}
            alt={`octocat${currentIndex}`}
            className="translate-x-[4vw] translate-y-[5vh] z-50"
            priority
            ref={ref}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMotion;
