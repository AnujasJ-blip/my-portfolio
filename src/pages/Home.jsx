import React from 'react';

const Home = () => {
  return (
    <header id='home' className='hero-content section-page'>
      <h1 className="hero-title">Hi, I'm <span className="highlight">Anuja</span></h1>
      <p className='subtitle-hero'>Computer Science Student</p>
      <p className='hero-description'>Passionate about building scalable databases and beautiful web applications. Ready to turn ideas into reality.</p>

      <div className='hero-btns'>
        <a href="#contact" className='btn-primary'>Contact Me</a>
        <a href="/cv.pdf" download="Anuja_CV.pdf" target="_blank" rel="noopener noreferrer" className='btn-secondary'>Download CV</a>
      </div>
    </header>
  );
};

export default Home;
