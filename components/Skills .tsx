import Image from "next/image";
import React from "react";
import { skillsData } from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full  bg-gray-950   hover:bg-opacity-30  bg-opacity-20 duration-200 backdrop-blur-2xl px-5 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
            <div className="w-1/2 justify-center hidden md:block">
              <Image
                src={skill.imageSrc}
                alt={skill.imageAlt}
                width={350}
                height={350}
                className="mr-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
