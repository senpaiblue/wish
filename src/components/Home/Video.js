"use client";

import React, { useEffect, useState } from "react";
import right from "../../../public/Ellipse.svg";
import Image from "next/image";

const Video = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 m-auto">
        <div className="relative w-[90%] inset-0 max-w-6xl  mx-auto my-8 rounded-xl border border-zinc-600/50 hover:border-zinc-600/75 overflow-hidden lg:px-20 lg:py-20 px-5 py-5 backdrop-filter backdrop-blur-xl bg-zinc-500/5">
          <video className="w-full rounded-xl" autoPlay muted loop>
            <source src="video.mp4" />
          </video>
        </div>
      </div>
      <Image
        src={right}
        alt="left linears"
        className="absolute left-0 top-32"
      />
      <Image
        src={right}
        alt="left linears"
        className="absolute right-0 top-0"
      />
    </section>
  );
};

export default Video;
