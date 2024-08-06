import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex items-center justify-center">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-lg">Community</div>
            <Link href="https://www.youtube.com/channel/UCVqJC9nswOixsmxE8v0RIXg">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="logos:youtube-icon" />
                <span className="text-base ml-1.5">YouTube</span>
              </p>
            </Link>
            <Link href="https://github.com/Senyoj">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="mdi:github" />
                <span className="text-base ml-1.5">GitHub</span>
              </p>
            </Link>
            <Link href="#">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="logos:discord-icon" />
                <span className="text-base ml-1.5">Discord</span>
              </p>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-lg">Social Media</div>
            <Link href="https://www.instagram.com/senjoes/">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="skill-icons:instagram" />
                <span className="text-base ml-1.5">Instagram</span>
              </p>
            </Link>
            <Link href="https://www.twitter.com/S_A_Joel">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="ri:twitter-x-fill" />
                <span className="text-base ml-1.5">Twitter</span>
              </p>
            </Link>
            <Link href="https://www.linkedin.com/in/ahadzi-joel-senyo-298b56212/">
              <p className="flex flex-row items-center my-2 cursor-pointer">
                <Icon icon="devicon:linkedin" />
                <span className="text-base ml-1.5">LinkedIn</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="text-base text-center">
          <p className="cursor-pointer">
            <span className="ml-1.5">adzijoelsenyo@gmail.com</span>
          </p>
          &copy; SoloDev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
