"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Button } from "@radix-ui/themes";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HeroMotion = () => {
  const [images, setImages] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress, scrollY } = useScroll();

  const totalRatio = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const loadImage = async () => {
    if (images.length >= 160) return;
    for (let i = 1; i < 161; i++) {
      const image = await import(`@/../public/animation/octocat/${i}.jpg`);
      setImages((prev) => [...prev, image]);
    }
  };

  const updateAtScroll = () => {
    const ratio = totalRatio.get();
    const currentFrame = Math.round(ratio * 160);
    if (currentFrame >= 159) setCurrentIndex(159);
    else setCurrentIndex(currentFrame);
  };

  useEffect(() => {
    loadImage();
    scrollY.onChange(updateAtScroll);
  }, []);

  if (images.length < 150)
    return (
      <>
        <div className="sticky top-[50%]">
          <LoadingSpinner />
        </div>
        <div className="h-[100vh]"></div>
      </>
    );
  return (
    <div className="h-[200vh]">
      <div className="sticky top-0">
        <div className="absolute left-[5%] top-[30%] h-full z-[100] text-white flex flex-col space-y-[2vh]">
          <div className="font-semibold text-[3vw] max-w-[45vw] leading-tight">
            <div>Over 100 million developers call GitHub home</div>
          </div>
          <div className="text-[1.1vw] font-thin max-w-[45vw]">
            Whether scaling your startup or learning to code, GitHub is your
            home. Join the world’s largest developer platform to build
            innovations empowering humanity.
          </div>
          <Button className="self-start" size="4" color="iris">
            Sign in to GitHub
          </Button>
        </div>
        <motion.div className="flex justify-end overflow-x-hidden">
          <Image
            src={images[currentIndex]}
            alt={`octo${currentIndex}`}
            className="w-[70%] translate-x-[8vw]"
            ref={ref}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMotion;
