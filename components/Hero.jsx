import React from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants.js';
import mahiPic from '../images/mahiPic.jpeg'; 

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-zinc-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-100 rounded-full border border-zinc-200">
  Full-Stack Developer • AI/ML Engineer
</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
              Building smart products with <br />
              <span className="text-zinc-500">code + AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
  I'm <span className="font-semibold text-zinc-900">{PERSONAL_INFO.name}</span>, 
  a full-stack developer who loves creating clean interfaces, robust backends, 
  and AI-powered features that make apps feel intelligent, fast, and modern.
</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-zinc-700 border bg-gray-100 border-zinc-400 rounded-lg hover:bg-zinc-50 transition-all "
              >
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                 href="/public/resume/Mahindha_Resume.pdf"
                download="Mahindha_Resume.pdf"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-zinc-900   rounded-lg hover:bg-zinc-800 transition-all group"
              >
                {/* <Mail className="mr-2 w-4 h-4" /> */}
                Resume
                <Download className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-zinc-200 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              {/* REPLACE src below with your actual photo URL */}
              <img 
                src={mahiPic}
                alt="Mahindha" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;