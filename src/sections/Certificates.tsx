import React from 'react';
import CertificateCard, { Certificate } from '../components/CertificateCard';

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Azure Masters',
    issuer: 'Microsoft / Online Platform',
    description: 'Comprehensive mastery of Microsoft Azure cloud services, architecture, and deployment.',
    url: 'https://drive.google.com/file/d/1GMc0aDJ4TOTQNvBQRgwNLCoFNCb01rtv/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Mobile App Development using React Native',
    issuer: 'Online Learning Platform',
    description: 'Building cross-platform mobile applications for iOS and Android using React Native.',
    url: 'https://drive.google.com/file/d/1LvpNJO3u2wWF36Ck0hlcP6yKFN_BfbjI/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'Frontend Development',
    issuer: 'Online Learning Platform',
    description: 'Modern web development focusing on responsive design, UI/UX, and modern JavaScript frameworks.',
    url: 'https://drive.google.com/file/d/1G1qzVyFVMcET1JhVkUoofUXSVjkbbLbX/view?usp=drive_link',
  },
  {
    id: 4,
    title: 'Claude Code Courses',
    issuer: 'Anthropic / Learning Platform',
    description: 'Completed comprehensive courses covering AI-assisted coding, prompting techniques, and integrating Claude into development workflows.',
    url: 'https://drive.google.com/drive/folders/1E_9HC6wipHmw6vX4wwPtmM1fQdRDJ5qg?usp=sharing',
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Continuous Learning
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of my commitment to continuous learning and staying updated with the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificatesData.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
