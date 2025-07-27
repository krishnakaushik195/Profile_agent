
import React from 'react';
import { Bot, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const HomeSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">Krishna Kaushik</h1>
        <p className="text-2xl text-emerald-400">Platform Engineer</p>
      </div>
      
      <div className="bg-slate-900/50 rounded-2xl p-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Bot className="w-6 h-6 text-emerald-400" />
          <h3 className="text-xl font-semibold text-white">AI Assistant</h3>
        </div>
        
        <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <Bot className="w-8 h-8 text-emerald-400 mt-1" />
            <p className="text-slate-300">
              Hi! I'm your AI assistant. Ask me anything about Krishna's background, skills, or experience!
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Input 
            placeholder="Ask about Krishna's experience, skills, projects..."
            className="flex-1 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
          />
          <Button className="bg-emerald-500 hover:bg-emerald-600 px-4">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
