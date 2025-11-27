import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import ChatWidget from './components/ChatWidget.jsx';
import Projects from './components/Projects.jsx';
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ChatWidget />
      </main>
      <Contact />
    </div>
  );
}

export default App;