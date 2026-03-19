import { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    const sections = document.querySelectorAll('.section-page');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="portfolio">
      <nav className='nav-bar'>
        <a href='#home' className='logo'>Anuja</a>
        <div className='nav-links'>
          <a href='#home' className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href='#projects' className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          <button onClick={toggleTheme} className='theme-toggle-nav'>
            {darkMode ? <IoMdSunny /> : <IoMdMoon />}
          </button>
        </div>
      </nav>

      <Home />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App