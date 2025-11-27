import React from 'react'
import {PROJECTS } from '../constants.js';
import { ArrowUpRight, Link } from 'lucide-react';

function Projects() {
  return (
     <section id="projects" className="py-24 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16"> */}
          
       {/* Projects */}
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center">
            Projects
              <span className="ml-3 h-px flex-1 bg-zinc-200 hover:bg-zinc-100"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <div key={project.id} className="bg-white p-6 bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg  hover:-translate-y-1 transition-all transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <img 
                        src={project.image} 
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        alt={project.title}
                        />
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors cursor-pointer hover:text-zinc-900" />
                    
                  </div>
                  <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-medium text-white bg-zinc-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          {/* </div> */}
    </div>
    </div>
    </section>
  )
}

export default Projects
