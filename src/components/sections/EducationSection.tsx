
import React from 'react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2017 - 2019",
    gpa: "3.8/4.0",
    specialization: "Distributed Systems & Machine Learning"
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Indian Institute of Technology (IIT) Delhi",
    location: "New Delhi, India",
    period: "2013 - 2017",
    gpa: "8.5/10.0",
    specialization: "Software Engineering & Algorithms"
  }
];

export const EducationSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Education</h1>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-slate-900/50 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-emerald-400 text-lg">{edu.institution}</p>
                <p className="text-slate-400">{edu.location}</p>
              </div>
              <span className="text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg">
                {edu.period}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div>
                <span className="text-slate-400 block">GPA</span>
                <span className="text-white font-semibold">{edu.gpa}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Specialization</span>
                <span className="text-white font-semibold">{edu.specialization}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
