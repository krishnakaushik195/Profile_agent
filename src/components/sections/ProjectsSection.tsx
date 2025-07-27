
import React from 'react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Cloud Infrastructure Platform",
    description: "Built a scalable cloud infrastructure platform serving 10M+ users with 99.9% uptime",
    status: "Production",
    tags: ["AWS", "Kubernetes", "Terraform", "Python"]
  },
  {
    title: "Microservices Architecture",
    description: "Designed and implemented microservices architecture reducing deployment time by 70%",
    status: "Live",
    tags: ["Docker", "Node.js", "React", "PostgreSQL"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed intelligent analytics dashboard with real-time data processing capabilities",
    status: "Beta",
    tags: ["Python", "TensorFlow", "React", "Redis"]
  }
];

export const ProjectsSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-900/50 rounded-2xl p-6 hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <Badge 
                variant="secondary" 
                className={`
                  ${project.status === 'Production' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                  ${project.status === 'Live' ? 'bg-blue-500/20 text-blue-400' : ''}
                  ${project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                `}
              >
                {project.status}
              </Badge>
            </div>
            
            <p className="text-slate-300 text-lg mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-600">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
