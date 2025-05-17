import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex space-x-2">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="sm"
                className="flex items-center space-x-1"
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 bg-white/20"
              >
                <Github size={16} />
                <span>Code</span>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;