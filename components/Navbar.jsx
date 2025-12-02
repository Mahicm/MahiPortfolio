import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // highlight active section
      const sections = NAV_LINKS.map((s) => s.href.replace("#", ""));
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(`#${id}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-zinc-900">
          {PERSONAL_INFO.name}.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative
                ${
                  active === link.href
                    ? "text-black"
                    : "text-zinc-600 hover:text-black"
                }
              `}
            >
              {link.name}

              {/* Active underline */}
              {active === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
              )}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume/Mahi-Resume.pdf"
            download
            className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:bg-zinc-800 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-700 hover:text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-down absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg py-5 px-6 flex flex-col space-y-5">
          
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium ${
                active === link.href
                  ? "text-black"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Resume Button (Mobile) */}
          <a
            href="/resume/Mahi-Resume.pdf"
            download
            className="text-base px-4 py-3 rounded-lg bg-black text-white text-center hover:bg-zinc-800 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
