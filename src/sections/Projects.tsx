import React, { useState } from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    title: 'SHOPPING APPLICATION',
    description: 'Developed a full-stack e-commerce web application using the MERN stack to provide users with a seamless online shopping experience, including product browsing and cart management. Integrated secure user authentication using JWT-based login and registration mechanisms. Built RESTful APIs to handle product management, user operations, and order processing.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Inventory Management System',
    description: 'Developed a web-based Inventory Management System to streamline inventory operations by managing product records, stock levels, and sales transactions efficiently. Designed user-friendly interfaces for managing products, suppliers, and inventory records with real-time stock updates. Built RESTful APIs using Spring Boot.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Task Management Web Application',
    description: 'Developed a full-stack task management application using the MERN stack, enabling users to create, organize, update, and monitor tasks effectively. Designed and implemented responsive user interfaces for task creation, editing, filtering, and deletion functionalities. Built RESTful APIs using Node.js and Express.js.',
    tags: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Expense Tracker Web Application',
    description: 'Developed a full-stack expense tracking application using the MERN stack, enabling users to manage personal finances by tracking income, expenses, and spending patterns efficiently. Designed and implemented responsive user interfaces using React.js for adding, editing, deleting, and categorizing transactions. Built RESTful APIs using Node.js and Express.js.',
    tags: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Dynamic Weather Application',
    description: 'Developed a responsive web application using React to fetch and display real-time weather data, incorporating user location and visual data representation. Implemented asynchronous API calls to retrieve weather information from a public API, ensuring data freshness. Utilized React components and state management to dynamically render weather details such as temperature, humidity, wind speed, and forecasts.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Notes Management Web Application',
    description: 'Developed a full-stack notes management application using the MERN stack, allowing users to create, organize, edit, and manage personal notes efficiently across devices. Designed and implemented responsive user interfaces using React.js for creating, viewing, editing, and deleting notes. Built RESTful APIs using Node.js and Express.js to handle note operations.',
    tags: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'JavaScript'],
    imageUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=800',
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