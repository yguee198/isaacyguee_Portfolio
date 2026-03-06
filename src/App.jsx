import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/ContactMe';
import Project from './pages/Project';


function App() {
  return (
    <div className="bg-darkBg min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contactMe">
          <Contact />
        </section>
      </main>

    
      <footer className="bg-black py-10 text-center text-gray-600 text-xs border-t border-gray-900">
        <p>&copy; 2025 Isaac DUSINGIZIMANA. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;