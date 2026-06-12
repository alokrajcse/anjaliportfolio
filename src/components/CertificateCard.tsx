import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  description?: string;
  date?: string;
  url?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
          <Award size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            {certificate.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm">
            {certificate.issuer}
          </p>
          {certificate.description && (
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
              {certificate.description}
            </p>
          )}
          {certificate.url && (
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-2"
            >
              <span>View Certificate</span>
              <ExternalLink size={14} />
            </a>
          )}
          {certificate.date && (
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-3">
              {certificate.date}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
