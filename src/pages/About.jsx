import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-page">
      <div className="title-wrapper">
        <h2 className="section-title">About <span className="highlight">Me</span></h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <p className="about-text">
          I'm a passionate Computer Science student with a keen interest in building responsive and user-friendly applications. I love turning ideas into reality through clean code and beautiful design.
        </p>
        <p className="about-text">
          My journey in software development started with Python and Java, and I've since expanded my skills to include modern web technologies like React, Node.js, and database management with SQL.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <h3>3+</h3>
            <p>Years of Study</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
