import React from 'react';
import { SKILLS } from '../constants.js';
import { Code2, Database, Brain, Terminal } from 'lucide-react';

const getIcon = (category) => {
  switch (category) {
    case 'Frontend': return <Code2 size={20} />;
    case 'Backend': return <Database size={20} />;
    case 'AI & Data Science': return <Brain size={20} />;
    default: return <Terminal size={20} />;
  }
};

const SKILL_COLORS = {
  Frontend: "bg-blue-100 text-blue-700",
  Backend: "bg-green-100 text-green-700",
  "AI & Data Science": "bg-purple-100 text-purple-700",
  "Tools & Others": "bg-yellow-100 text-yellow-700",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-50 border-t border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Technical Proficiency</h2>
          <p className="text-zinc-600">
            A balanced skillset combining traditional software engineering with modern AI capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${SKILL_COLORS[skillGroup.category]}`}>
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="font-bold text-zinc-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;