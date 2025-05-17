import React from 'react';
import SkillCard, { Skill } from '../components/SkillCard';
import { 
  Code, 
  Layout, 
  Database, 
  Cpu,
  TestTube, 
  GitBranch,
  Cloud,
  ChevronRight 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building modern web applications with latest technologies',
    skills: [
      { name: 'React', icon: <Code size={24} />, level: 5 },
      { name: 'TypeScript', icon: <Code size={24} />, level: 4 },
      { name: 'Next.js', icon: <Layout size={24} />, level: 4 },
      { name: 'Tailwind CSS', icon: <Layout size={24} />, level: 5 },
    ],
  },
  {
    title: 'State Management & APIs',
    description: 'Managing application state and data flow',
    skills: [
      { name: 'Redux', icon: <Database size={24} />, level: 5 },
      { name: 'GraphQL', icon: <Database size={24} />, level: 4 },
      { name: 'REST APIs', icon: <Cloud size={24} />, level: 5 },
      { name: 'React Query', icon: <Database size={24} />, level: 4 },
    ],
  },
  {
    title: 'Tools & Technologies',
    description: 'Essential tools for modern web development',
    skills: [
      { name: 'Webpack', icon: <Cpu size={24} />, level: 4 },
      { name: 'Git', icon: <GitBranch size={24} />, level: 5 },
      { name: 'Jest', icon: <TestTube size={24} />, level: 4 },
      { name: 'Vite', icon: <Cpu size={24} />, level: 4 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            My Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Specialized in frontend development with a comprehensive tech stack for building
            modern, scalable applications.
          </p>
        </div>
        
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-50 dark:bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Additional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
            <Bullet text="Responsive Design" />
            <Bullet text="Web Performance" />
            <Bullet text="UI/UX Design" />
            <Bullet text="SEO Optimization" />
            <Bullet text="Web Accessibility" />
            <Bullet text="Cross-browser Compatibility" />
            <Bullet text="CI/CD" />
            <Bullet text="Agile Development" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center">
    <ChevronRight size={16} className="text-blue-500 mr-2 flex-shrink-0" />
    <span className="text-slate-700 dark:text-slate-300">{text}</span>
  </div>
);

export default Skills;