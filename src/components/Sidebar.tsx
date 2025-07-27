
import React from 'react';
import { User, Download, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Sidebar = () => {
  return (
    <div className="w-80 bg-slate-900/95 p-8 flex flex-col items-center">
      <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-400/30">
        <User className="w-16 h-16 text-slate-400" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">Krishna Kaushik</h2>
      <p className="text-slate-300 text-center mb-8 leading-relaxed">
        Crafting Intelligent Experiences<br />
        with Code + Creativity
      </p>
      
      <div className="flex gap-4 mb-8">
        <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
      </div>
      
      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
        <Download className="w-5 h-5 mr-2" />
        Download CV
      </Button>
    </div>
  );
};
