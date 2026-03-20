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
          title="Blue Legacy Website(Group Project)"
          description="A website designed to protect marine life and eco-system"
          tags={["HTML", "CSS", "JavaScript"]}
          image="https://placehold.co/600x400/f0f0f5/6c4af0?text=Blue+Legacy+Website"
        />
        <ProjectCard
          title="Data Analysis personal project"
          description="Performed a real world data analysis with a large steam game dataset"
          tags={["Python", "Pandas", "Matplotlib"]}
          image="https://placehold.co/600x400/e8e8ed/6c4af0?text=Data+Analysis"
        />
      </div>
    </section>
  );
};

export default Projects;
