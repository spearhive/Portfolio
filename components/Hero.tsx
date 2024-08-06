import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-30">
      <div className="">
        <Spotlight className="absolute -top-40 md:-left-32 md:-top-20 h-screen fill-white rotate-45" />
        <Spotlight className="absolute -top-10 md:-right-40 md:-top-20 h-screen fill-white -rotate-45" />
      </div>
      <div className="w-full">
        <div className=" h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]  absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="flex  flex-col lg:flex-row relative justify-evenly items-center">
          <div className="flex justify-center my-20 relative z-20  w-full">
            <div className="">
              <TextGenerateEffect
                className=""
                words="Turning innovative client ideas into captivating user experiences"
              />
              <div className=" py-10 text-sm  ">
                <p className=" text-sm font-light    text-blue-100 tracking-widest py-1 rounded-2xl px-2 bg-opacity-20 bg-blue-950  w-max">
                  Your No.1 Pro Develper
                </p>
                <p className=" text-lg lg:text-2xl  font-semibold">
                  Hi , I am Joel Senyo, FullStack Web Developer
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start ">
                <a href="#projects">
                  <button className="p-5   inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-balck-100 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="px-1">Explore My Work</span>
                    <Icon icon="bxs:paper-plane" className=" opacity-90" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/mainIconsdark.svg"
              alt="Main Icons Dark"
              width={650}
              height={650}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
