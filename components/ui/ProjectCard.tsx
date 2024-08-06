import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, des, img, iconLists, link }) => {
  return (
    <div className="bg-gray-950  hover:bg-opacity-30 bg-opacity-20 duration-200 backdrop-blur-2xl p-5 rounded-lg shadow-lg hover:scale-x-105 ">
      <div className="mb-4 overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="rounded-t-lg hover:scale-110 duration-300 ease-in-out"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{des}</p>
      <div className="flex space-x-2 mb-4">
        {iconLists.map((icon, index) => (
          <Image key={index} src={icon} alt={`icon-${index}`} width={30} height={30} />
        ))}
      </div>
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
