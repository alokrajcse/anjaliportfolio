import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Portfolio</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-md">
              Building beautiful digital experiences with a focus on performance and accessibility.
            </p>
          </div>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/anj1064" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/anjali-bharti-06ba69291/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Anjali Bharti. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;