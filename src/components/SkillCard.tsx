import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-50 dark:bg-slate-700 rounded-md text-blue-600 dark:text-blue-400">
          {skill.icon}
        </div>
        <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
      </div>
      <div className="mt-4">
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${(skill.level / 5) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-slate-500 dark:text-slate-400">Beginner</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Expert</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;