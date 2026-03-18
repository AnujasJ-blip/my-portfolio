import { FaPython, FaJava, FaReact, FaGithub } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  const skills =["Python", "Java", "React", "Simulink", "SQL"];
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="portfolio" style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
      <header>
        <button onClick={toggleTheme} className='theme-toggle'>
          {darkMode ? <IoMdSunny /> : <IoMdMoon/>}
        </button>
        <h1>Anuja's Portfolio</h1>
        <p>Computer Science Student | ML & Robotics Enthusiast</p>

        {/*Skills*/}
        <div className='skills-bar'>
          <span className="skill-badge"><FaPython /> Python</span>
          <span className="skill-badge"><FaJava /> Java</span>
          <span className="skill-badge"><FaReact /> React</span>
        </div>
      </header>

      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            <ProjectCard 
              title="Mind Wave" 
              description="A mental wellness application designed for Sri Lankan students." 
              tags={["React", "Wellness"]} 
            />
            <ProjectCard 
              title="Robotics: PID Controller" 
              description="A two-coach system controlled by PID controllers developed in Simulink." 
              tags={["Robotics", "Control Systems", "Simulink"]} 
            />
            <ProjectCard 
              title="Machine Learning Models" 
              description="Implementation of Naive Bayes, Logistic Regression, and KNN for data analysis." 
              tags={["Python", "Scikit-learn", "ML"]} 
            />
          </div>
        </section>
      </main>

      <footer className='footer'>
          <h2>Get in Touch</h2>
          <p>Currently studying Computer Science and open to collaboration</p>
          <div className='contact-links'>
            <a href="https://github.com/AnujasJ-blip" target="_blank" rel='noreferrer'>GitHub</a>
            <a href='mailto:anujawork8@gmail.com'>Email</a>
            <a href='#'>LinkedIn</a>
          </div>
          <p className='copyright'>© 2026 Anuja. Built with React + Vite.</p>
      </footer>

    </div>
  )
}

export default App