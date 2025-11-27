import React from 'react';
import { PERSONAL_INFO } from '../constants.js';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-zinc-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's work together.</h2>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-zinc-300">
                <Mail className="w-5 h-5 mr-3 text-zinc-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center text-zinc-300">
                <MapPin className="w-5 h-5 mr-3 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  placeholder="How can we help each other?"
                ></textarea>
              </div>
              <button className="w-full bg-white text-zinc-900 font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-zinc-800 mt-20 pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;