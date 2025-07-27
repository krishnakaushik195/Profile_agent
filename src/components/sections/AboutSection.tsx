
import React from 'react';

export const AboutSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      
      <div className="space-y-6 text-slate-300">
        <p className="text-lg leading-relaxed">
          I'm a passionate Platform Engineer with over 5 years of experience in crafting intelligent experiences 
          through innovative code and creative solutions. My expertise lies in building scalable platforms and 
          developing cutting-edge applications that bridge the gap between technology and user experience.
        </p>
        
        <p className="text-lg leading-relaxed">
          With a strong foundation in cloud technologies, microservices architecture, and modern development 
          practices, I specialize in creating robust systems that can handle enterprise-level challenges while 
          maintaining optimal performance and reliability.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Experience</h3>
          <p className="text-slate-300">5+ Years in Platform Engineering</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Location</h3>
          <p className="text-slate-300">San Francisco, CA</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Specialization</h3>
          <p className="text-slate-300">Cloud Architecture & DevOps</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Availability</h3>
          <p className="text-slate-300">Open to Opportunities</p>
        </div>
      </div>
    </div>
  );
};
