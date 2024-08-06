import React from "react";
import { projects } from "@/data";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              des={project.des}
              img={project.img}
              iconLists={project.iconLists}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
