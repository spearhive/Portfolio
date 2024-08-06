"use client"

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { workExperiences } from "@/data";
import WorkExpCard from "./ui/WorkExpCard";

const WorkExperience: React.FC = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const intervalTime = 6000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % workExperiences.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${index * 100}%`,
      transition: { duration: 0.5 },
    });
  }, [index, controls]);

  return (
    <section id="work" className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
      >
        {workExperiences.map((exp) => (
          <div className="w-full flex-shrink-0 px-2" key={exp.id}>
            <WorkExpCard workExperience={exp} />
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 pb-4">
        {workExperiences.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === idx ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </section >
  );
};

export default WorkExperience;
