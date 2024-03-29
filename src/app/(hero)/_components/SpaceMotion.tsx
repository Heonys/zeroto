"use client";
import Image from "next/image";
import { spaceImage, starImage } from "@/asset/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionTest = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const spaceScale = useTransform(scrollYProgress, [0, 1], [4, 1]);
  const starScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const textScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imagePositionY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const textPositionY = useTransform(scrollYProgress, [0, 0.5], ["0%", "90%"]);

  return (
    <div className="h-[250vh]">
      <div className="text-white overflow-hidden h-full relative" ref={ref}>
        <motion.div style={{ scale: spaceScale, y: imagePositionY, opacity }}>
          <Image
            src={spaceImage}
            alt="space"
            layout="responsive"
            width="960"
            height="600"
          />
        </motion.div>
        <motion.div
          style={{ scale: starScale, y: imagePositionY }}
          className="absolute top-0 left-0 z-50 w-full"
        >
          <Image
            src={starImage}
            alt="stars"
            layout="responsive"
            width="960"
            height="600"
            className="w-full"
          />
        </motion.div>
        <motion.h1
          style={{ scale: textScale, opacity, y: textPositionY }}
          className="absolute bottom-[16%] left-0 w-full h-full text-center font-semibold text-5xl z-[100] text-white "
        >
          <div>Connect with the global</div>
          <div>developer comunity</div>
        </motion.h1>
      </div>
    </div>
  );
};

export default MotionTest;
