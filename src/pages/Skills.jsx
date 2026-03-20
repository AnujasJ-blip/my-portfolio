import React from 'react';
import { FaPython, FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaCogs, FaFileExcel } from 'react-icons/fa';

const skillsData = [
  { name: "HTML", desc: "Standard Markup Language", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", desc: "Style Sheet Language", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", desc: "Web Scripting Language", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "React", desc: "Frontend UI Library", icon: <FaReact color="#61DAFB" /> },
  { name: "Excel", desc: "Data Analysis & Spreadsheets", icon: <FaFileExcel color="#217346" /> },
  { name: "Python", desc: "High-level Programming", icon: <FaPython color="#3776AB" /> },
  { name: "Java", desc: "Object-Oriented Language", icon: <FaJava color="#007396" /> },
  { name: "SQL", desc: "Relational Database", icon: <FaDatabase color="#4479A1" /> },
  { name: "Simulink", desc: "Model-Based Design", icon: <FaCogs color="#0076A8" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="section-page">
      <div className="title-wrapper">
        <h2 className="section-title">TOOLS <span className="highlight">&</span> STACK</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
