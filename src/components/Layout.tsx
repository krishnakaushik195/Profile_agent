
import React from 'react';
import { Sidebar } from './Sidebar';
import { Navigation } from './Navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Layout = ({ children, activeSection, onSectionChange }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-3rem)] flex flex-col items-center justify-center relative">
        <Button className="absolute top-0 right-0 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 z-10">
          <Edit className="w-4 h-4" />
          Edit Resume
        </Button>
        
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl w-full max-w-6xl h-[800px] flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
            <ScrollArea className="flex-1">
              <main className="p-8 h-full">
                {children}
              </main>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};
