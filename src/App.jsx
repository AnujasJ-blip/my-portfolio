import { FaPython, FaJava, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const skills =["Python", "Java", "React", "Simulink", "SQL"];
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.className = darkMode? 'dark-theme' : 'light-theme';
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

        <header id='home' className='hero-content section-page'>
          <h1>Hi, I'm Anuja</h1>
          <p className='subtitle-hero'>Computer Science Student</p>
          <p className='description'>Passionate about creating data bases.</p>

          <div className='hero-btns'>
            <button className='btn-primary'>Contact Me</button>
            <button className='btn-secondary'>Download CV</button>
          </div>
        </header>

      <main>
        <section id="about" className="section-page">
          <h2>About Me</h2>
          <p className="description">Currently studying Computer Science. I enjoy building applications and learning new technologies.</p>
        </section>

        <section id="projects" className="section-page">
          <h2>My Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="Mind Wave" 
              description="A mental wellness application designed for Sri Lankan students." 
              tags={["React", "Wellness"]} 
              image="https://placehold.co/600x400/1e1e2f/8a91ff?text=Mind+Wave"
            />
            <ProjectCard 
              title="Robotics: PID Controller" 
              description="A two-coach system controlled by PID controllers developed in Simulink." 
              tags={["Robotics", "Control Systems", "Simulink"]} 
              image="https://placehold.co/600x400/1e1e2f/8a91ff?text=PID+Controller"
            />
            <ProjectCard 
              title="Machine Learning Models" 
              description="Implementation of Naive Bayes, Logistic Regression, and KNN for data analysis." 
              tags={["Python", "Scikit-learn", "ML"]} 
              image="https://placehold.co/600x400/1e1e2f/8a91ff?text=ML+Models"
            />
          </div>
        </section>

        <section id="skills" className="section-page">
          <h2>Skills</h2>
          <div className="skills-bar">
             {skills.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
          </div>
        </section>
      </main>

      <footer id='contact' className='footer section-page'>
          <h2>Get in Touch</h2>
          <p>Currently studying Computer Science and open to collaboration</p>
          <div className='contact-links'>
            <a href="https://github.com/AnujasJ-blip" target="_blank" rel='noreferrer'><FaGithub /> GitHub</a>
            <a href='mailto:anujawork8@gmail.com'><FaEnvelope /> Email</a>
            <a href='#' target="_blank" rel='noreferrer'><FaLinkedin /> LinkedIn</a>
          </div>
          <p className='copyright'>© 2026 Anuja. Built with React + Vite.</p>
      </footer>

    </div>
  )
}

export default App