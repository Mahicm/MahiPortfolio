import React from 'react';
import { EDUCATION } from '../constants.js';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          
          {/* Left Side Title */}
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4 flex items-center">
              <GraduationCap className="mr-3 w-7 h-7 text-zinc-800" />
              Education
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              My academic background and achievements throughout my learning journey.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="md:w-2/3 space-y-10">
            {EDUCATION.map((edu) => (
              <div 
                key={edu.id}
                className="relative pl-8 border-l-2 border-zinc-200 py-3 hover:-translate-y-1 hover:shadow-md rounded-lg transition-all bg-white"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[10px] top-5 w-3.5 h-3.5 bg-zinc-900 rounded-full ring-4 ring-white shadow-md"></span>

                <div className="text-sm text-zinc-500 font-semibold tracking-wide uppercase mb-1">
                  {edu.year}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-1">
                  {edu.degree}
                  {edu.score && (
                    <span className="text-xs bg-zinc-900 text-white px-2 py-1 rounded-lg ml-2">
                      {edu.score}
                    </span>
                  )}
                </h3>

                <div className="text-zinc-700 font-medium mb-3">
                  {edu.institution}
                </div>

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
