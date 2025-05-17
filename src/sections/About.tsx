import React from 'react';
import { Award, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 -rotate-6 rounded-2xl bg-blue-600/10 dark:bg-blue-500/10 transform -translate-x-3 translate-y-3"></div>
              <img
                src="https://github.com/alokrajcse/ASSAN-Anjali-Profile/blob/main/anjalipark.jpg?raw=true"
                alt="Professional portrait"
                className="rounded-2xl relative z-10 w-full object-cover shadow-md"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-7/12">
            <div className="mb-6">
              <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Crafting exceptional web experiences
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I'm a passionate frontend developer with expertise in building modern web applications. 
                Specializing in React and modern JavaScript, I create responsive, accessible, and 
                performant websites that provide exceptional user experiences. My approach combines 
                clean code practices with creative problem-solving to deliver engaging digital solutions.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="space-y-6">
              <TimelineItem 
                icon={<Briefcase size={20} />}
                title="Frontend Developer"
                company="ASSAN Inc."
                period="Present"
              />
              
              <TimelineItem 
                icon={<GraduationCap size={20} />}
                title="Electronics and Communication Engineering"
                company="Silicon University "
                period="2022 - 2026"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, company, period }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300">{company}</p>
      <div className="flex items-center mt-1 text-sm text-slate-500 dark:text-slate-400">
        <Calendar size={14} className="mr-1" />
        <span>{period}</span>
      </div>
    </div>
  </div>
);

export default About;