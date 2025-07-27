
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export const ContactSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">Email</p>
                <p className="text-white">krishna.kaushik@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Social Links</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">LinkedIn</p>
                <p className="text-white">linkedin.com/in/krishnakaushik</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Github className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">GitHub</p>
                <p className="text-white">github.com/krishnakaushik</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Twitter className="w-6 h-6 text-emerald-400" />
              <div>
                <p className="text-slate-400">Twitter</p>
                <p className="text-white">@krishna_kaushik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
