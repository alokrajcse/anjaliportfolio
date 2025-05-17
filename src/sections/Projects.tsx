import React, { useState } from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory, cart management, and secure payments.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing social media content and analytics.',
    tags: ['React', 'Next.js', 'GraphQL', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'An interactive real estate platform with virtual tours and property management.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Supabase'],
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Project Management Tool',
    description: 'A collaborative project management application with real-time updates and task tracking.',
    tags: ['React', 'TypeScript', 'Socket.io', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with dynamic theming and detailed forecasts.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'Streaming Platform',
    description: 'A video streaming platform with content management and user subscriptions.',
    tags: ['React', 'Next.js', 'Stripe', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const loadMore = () => {
    setVisibleProjects(Math.min(visibleProjects + 2, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Explore my web applications that showcase modern development practices,
            elegant UI/UX design, and robust architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;