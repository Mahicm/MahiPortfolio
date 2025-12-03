import React from "react";
import { PROJECTS } from "../constants.js";
import { ArrowUpRight, Github } from "lucide-react";
//import {resuMatch} from '../public/images/ResuMatch.png';

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 border-t border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center">
            Projects
            <span className="ml-3 h-px flex-1 bg-zinc-200"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <img
                  src={project.url}  
                  alt={project.title || "Project screenshot"}
                  className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-[1.02]"
                />

                <div className="flex justify-between items-start mb-4">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group"
                  >
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </a>

                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub repository"
                  >
                    <Github className="text-zinc-600 hover:text-black transition-colors cursor-pointer" />
                  </a>
                </div>

                <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-white bg-zinc-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
