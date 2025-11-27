import React from 'react';
import { EXPERIENCES} from '../constants.js';


const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center">
              Experience
              <span className="ml-3 h-px flex-1 bg-zinc-200"></span>
            </h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-zinc-200 hover:border-zinc-300 transition-all">
                  <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-zinc-200 rounded-full ring-4 ring-white"></span>
                  <div className="mb-1 text-sm text-zinc-500 font-medium">{exp.period}</div>
                  <h3 className="text-lg font-bold text-zinc-900">{exp.role}</h3>
                  <div className="text-zinc-600 mb-4">{exp.company}</div>
                  <p className="text-zinc-600 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Experience;