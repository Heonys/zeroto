"use client";
import React, { useState } from "react";
import { motion, useSpring, useMotionTemplate, transform } from "framer-motion";
import HeroButtonGroup from "./HeroButtonGroup";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function HeroSection() {
  const { status } = useSession();

  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const rotateValue = 15;
  const transformValue = rotateValue * 2;
  const springValue = { stiffness: 400, damping: 30 };

  const rotateX = useSpring(0, springValue);
  const rotateY = useSpring(0, springValue);
  const x = useSpring(0, springValue);
  const y = useSpring(0, springValue);
  const shadowX = useSpring(0, springValue);
  const shadowY = useSpring(30, springValue);

  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.25))`;

  const convertCursorPosition = (e: any) => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
    x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
    y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

    shadowX.set(transform(objectX, [0, 1], [20, -20]));
    shadowY.set(transform(objectY, [0, 1], [60, 20]));
  };

  const handleMouseEnter = (e: any) => {
    const currentElement = e.target.getBoundingClientRect();

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left,
    });

    convertCursorPosition(e);
  };

  /* On Mouse Move, convert values */
  const handleMouseMove = (e: any) => {
    convertCursorPosition(e);
  };

  const handleMouseLeave = (e: any) => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(40);
  };

  if (status === "loading") {
    return (
      <div className="sticky h-[100vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="w-[100vw] h-[100vh] justify-center flex-row-reverse flex items-center"
        style={{
          perspective: 1200,
        }}
      >
        <div className="relative z-[100] text-white flex flex-col space-y-[2.5vh] ">
          <div className="font-semibold text-[3vw] max-w-[50vw] leading-tight">
            {/* <div>Where the world builds software</div> */}
            <div>From Zero to Github</div>
            <div>GitHub Profile Simplified</div>
          </div>
          <div className="text-[1.1vw] font-thin max-w-[35vw]">
            {`Zeroto simplifies GitHub profile visualization and analysis. It offers effortless developer search, bookmarking, and monitoring tools.`}
          </div>
          <HeroButtonGroup />
        </div>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer relative -translate-x-[5vw]"
        >
          <motion.div
            style={{
              width: "38vw",
              height: "38vw",
              borderRadius: 92,
              rotateX,
              rotateY,
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              position: "relative",
              backgroundImage: "url('/images/earth.png')",
              backgroundSize: "cover",
            }}
            className="-z-30"
          >
            <motion.div
              style={{
                x,
                y,
                filter,
                width: "10vw",
                height: "10vw",
                backgroundImage: "url('/images/1.png')",
                backgroundSize: "cover",
              }}
              animate={{ rotateZ: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute right-[5vw] bottom-[15vh]"
            />
            <motion.div
              style={{
                x,
                y,
                filter,
                width: "8vw",
                height: "8vw",
                backgroundImage: "url('/images/2.png')",
                backgroundSize: "cover",
              }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute left-[3vw] top-[20vh]"
            />
            <motion.div
              style={{
                x,
                y,
                filter,
                width: "2vw",
                height: "2vw",
                backgroundImage: "url('/images/3.png')",
                backgroundSize: "cover",
              }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute left-[3vw] bottom-[30vh]"
            />
            <motion.div
              style={{
                x,
                y,
                filter,
                width: "2vw",
                height: "2vw",
                backgroundImage: "url('/images/4.png')",
                backgroundSize: "cover",
              }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute right-[10vw] top-[10vh]"
            />
            <motion.div
              style={{
                x,
                y,
                filter,
                width: "5vw",
                height: "5vw",
                backgroundImage: "url('/images/5.png')",
                backgroundSize: "cover",
              }}
              className="absolute right-0 top-[15vh]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
