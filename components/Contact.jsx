import React, {useState,useRef, useEffect} from 'react';
import { PERSONAL_INFO } from '../constants.js';
import { Mail, Github, Linkedin, MapPin, X, CircleCheckBig } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendMail= (e) => {
    console.log("Called inside");
    e.preventDefault();
    
    emailjs.sendForm('service_aps4zhn', 'template_70w7ebt', form.current, '6FpzhV267I_vh7bKp')
      .then((result) => {
          console.log("Called Pass--------->",result.text);
          setMessage("Message sent successfully!");
          e.target.reset();
      }, (error) => {
          console.log("Called Fail--------->",error.text);
          setMessage("Failed to send message. Please try again.");
      });
  }

  return (
    <footer id="contact" className="bg-zinc-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

      {message && (<div id="toast-success" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
            <div class="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success bg-success-soft rounded">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
                <span class="sr-only">
                  <CircleCheckBig />
                </span>
            </div>
            <div class="ms-3 text-sm font-normal">{message}</div>
            <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">
                  <X />
                </span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            </button>
        </div>)}
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's work together.</h2>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
              I'm actively looking for new opportunities. Feel free to reach out — I usually respond within a few hours.
            </p>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center text-zinc-300">
                <Mail className="w-5 h-5 mr-3 text-zinc-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-zinc-300">
                <MapPin className="w-5 h-5 mr-3 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <Github size={20} />
              </a>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            {/* <form className="space-y-4" target="_blank" action="https://formsubmit.co/mahichinu02@gmail.com" method="POST"> */}
            <form ref={form} onSubmit={sendMail} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input 
                  name="email"
                  type="email" 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="youremail@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-zinc-900 font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors">
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
