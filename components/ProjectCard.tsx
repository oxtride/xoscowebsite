
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col group hover:bg-white/10 transition-colors duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 flex-grow mb-6 font-light">{description}</p>
      <a 
        href={link} 
        className="self-start mt-auto px-6 py-2 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group-hover:scale-105"
      >
        Visit 
      </a>
    </div>
  );
};

export default ProjectCard;
