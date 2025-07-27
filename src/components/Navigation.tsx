
import React from 'react';
import { Home, User, FolderOpen, Zap, Award, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Zap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <div className="flex justify-center items-center p-8 pb-4">
      <nav className="flex gap-2 flex-wrap justify-center">
        {navItems.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeSection === id ? 'default' : 'ghost'}
            onClick={() => onSectionChange(id)}
            className={`
              px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2
              ${activeSection === id 
                ? 'bg-emerald-500 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </nav>
    </div>
  );
};
