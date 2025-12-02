import React from "react";
import { EXPERIENCES } from "../constants.js";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-zinc-900 mb-12 flex items-center">
          Experience
          <span className="ml-3 h-px flex-1 bg-zinc-200"></span>
        </h2>

        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-10 border-l border-zinc-300 hover:border-zinc-400 transition-all"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[6.5px] top-2 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-zinc-100"></span>

              <div className="text-sm text-zinc-500 font-medium mb-1">{exp.period}</div>
              <h3 className="text-xl font-semibold text-zinc-900">{exp.role}</h3>
              <p className="text-zinc-600 mb-4">{exp.company}</p>

              {/* Bullet Points */}
              <ul className="list-disc list-inside text-zinc-600 space-y-2 mb-4">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white border border-zinc-300 text-zinc-700 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
