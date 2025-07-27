
import React from 'react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    credentialId: "AWS-SAP-2023-001",
    year: "2023"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    credentialId: "CKA-2023-002",
    year: "2023"
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    credentialId: "GCP-PCA-2022-003",
    year: "2022"
  }
];

export const CertificationsSection = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-8">Certifications</h1>
      
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-slate-900/50 rounded-2xl p-6 hover:bg-slate-900/70 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-emerald-400 text-lg">{cert.issuer}</p>
                <p className="text-slate-400 mt-2">Credential ID: {cert.credentialId}</p>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400">
                {cert.year}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
