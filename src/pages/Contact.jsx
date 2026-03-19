import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='section-page'>
      <div className="title-wrapper">
        <h2 className="section-title">GET IN <span className="highlight">TOUCH</span></h2>
        <div className="underline"></div>
      </div>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hi? I'd love to hear from you.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>

        <div className="contact-info-cards">
          <a href="https://github.com/AnujasJ-blip" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><FaGithub /></div>
            <div className="contact-details">
              <h4>GitHub</h4>
              <p>github.com/AnujasJ-blip</p>
            </div>
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon"><FaLinkedin /></div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </div>
          </a>
          <a href="mailto:anujawork8@gmail.com" className="contact-card">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>anujawork8@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
