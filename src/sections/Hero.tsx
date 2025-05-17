import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -right-20 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-20 -left-20 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight animate-fade-in">
            <span className="inline-block">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 inline-block">
               Anjali Bharti
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl animate-fade-in animation-delay-200">
            I create beautiful, responsive web applications with modern technologies and a focus on user experience.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
            <Button href="#projects" variant="primary" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a
              href="#about"
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Scroll Down"
            >
              <ArrowDown className="text-slate-700 dark:text-slate-200" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;