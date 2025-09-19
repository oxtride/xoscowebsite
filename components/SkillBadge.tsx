
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3 text-gray-200 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300">
      {skill}
    </div>
  );
};

export default SkillBadge;
