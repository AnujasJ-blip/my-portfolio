import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section-page">
      <div className="title-wrapper">
         <h2 className="section-title">MY <span className="highlight">PROJECTS</span></h2>
         <div className="underline"></div>
      </div>
      <div className="project-grid">
        <ProjectCard 
          title="Mind Wave" 
          description="A mental wellness application designed for Sri Lankan students." 
          tags={["React", "Wellness"]} 
          image="https://placehold.co/600x400/ffffff/6c4af0?text=Mind+Wave"
        />
        <ProjectCard 
          title="Robotics: PID Controller" 
          description="A two-coach system controlled by PID controllers developed in Simulink." 
          tags={["Robotics", "Control Systems", "Simulink"]} 
          image="https://placehold.co/600x400/f0f0f5/6c4af0?text=PID+Controller"
        />
        <ProjectCard 
          title="Machine Learning Models" 
          description="Implementation of Naive Bayes, Logistic Regression, and KNN for data analysis." 
          tags={["Python", "Scikit-learn", "ML"]} 
          image="https://placehold.co/600x400/e8e8ed/6c4af0?text=ML+Models"
        />
      </div>
    </section>
  );
};

export default Projects;
