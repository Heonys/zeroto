"use client";
import Image from "next/image";
import { SpaceImage, StarImage } from "@/asset/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionTest = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale3 = useTransform(scrollYProgress2, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div className="text-white overflow-hidden h-full relative" ref={ref}>
      <motion.div style={{ scale, y: yBg }} className="">
        <Image src={SpaceImage} alt="space" className="" />
      </motion.div>
      <motion.div
        style={{ scale: scale2, y: yBg }}
        className="absolute top-0 left-0 z-50 w-full h-full"
      >
        <Image src={StarImage} alt="space" />
      </motion.div>
      <motion.h1
        style={{ scale: scale3, opacity, y: yBg }}
        className="absolute bottom-[16%] left-0 w-full h-full text-center font-semibold text-5xl z-[100] text-white "
      >
        <div>Connect with the global</div>
        <div>developer comunity</div>
      </motion.h1>
    </div>
  );
};

export default MotionTest;
