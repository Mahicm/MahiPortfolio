import React from 'react';
import { EDUCATION } from '../constants.js';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4 flex items-center">
              <GraduationCap className="mr-3" /> Education
            </h2>
            <p className="text-zinc-500">My academic background and qualifications.</p>
          </div>

          <div className="md:w-2/3 space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative pl-8 border-l-2 border-zinc-200 py-2">
                <span className="absolute -left-[9px] top-4 w-4 h-4 bg-zinc-900 rounded-full border-4 border-white"></span>
                <div className="mb-1 text-sm text-zinc-500 font-bold uppercase tracking-wide">{edu.year}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{edu.degree}</h3>
                <div className="text-zinc-700 font-medium mb-3">{edu.institution}</div>
                <p className="text-zinc-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;