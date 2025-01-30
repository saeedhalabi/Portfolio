import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/project";

const Projects = () => {
  return (
    <section className="py-10">
      <div className="text-right mr-4">
        <h2 className="text-xl font-bold mb-1 inline-block relative">
          personal projects
          <span className="block w-12 h-1 bg-black mt-1 ml-auto"></span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
