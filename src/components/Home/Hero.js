"use client";
import React, { useEffect, useState } from "react";
import Bg from "../../../public/BgHero.svg";
import PhoneBg from "../../../public/Phone.svg";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import ButtonHeroHome from "./ButtonHeroHome";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(setMousePosition);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#494949",
      mixBlendMode: "diff",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="max-w-full max-h-full">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <Image src={Bg} alt="HeroBg" className="w-full h-7/12 hidden lg:block" />
      <Image
        src={PhoneBg}
        alt="HeroBg"
        className="w-full h-[80%] block lg:hidden "
      />
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="absolute lg:top-[40%] lg:right-[30%] md:top-[40%] md:right-[25%] flex flex-col items-center top-32 right-10 "
      >
        <AnimatePresence>
          <AnimatedTextCharacter text="Catch the best deals," />
          <AnimatedTextCharacter text="Make a wish." />
        </AnimatePresence>
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-[#B5B5B5] text-lg font-semibold md:mt-8 mt-4"
        >
          We got you covered.
        </p>
        <div className="flex flex-row w-full gap-10 mt-8">
          <ButtonHeroHome />
          <button className="bg-transparent w-full border-[#323136] border-2 rounded-lg text-white on hover:bg-gradient-to-tr from-[#616169] to-[#B5B5B5 opacity-0] md:px-4 py-2 px-2">
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
