
import React from 'react';
import { Progress } from '@/components/ui/progress';

const programmingLanguages = [
  { name: "Python", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "Go", level: 85 },
  { name: "Java", level: 80 }
];

const cloudDevOps = [
  { name: "AWS", level: 95 },
  { name: "Kubernetes", level: 90 },
  { name: "Docker", level: 95 },
  { name: "Terraform", level: 85 }
];

export const SkillsSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Skills</h1>
      
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Programming Languages</h2>
          <div className="space-y-6">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-lg">{skill.name}</span>
                  <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3 bg-slate-800"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Cloud & DevOps</h2>
          <div className="space-y-6">
            {cloudDevOps.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-lg">{skill.name}</span>
                  <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3 bg-slate-800"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
