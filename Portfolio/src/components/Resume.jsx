import React from 'react';
import resume from '../assets/files/resume.pdf'; // Path to your resume PDF file
import './Resume.css'; // Custom CSS file for styling

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-heading">My Resume</h2>
      <p className="resume-description">
        Download my resume to learn more about my skills, experience, and projects.
      </p>
      <a
        href={resume}
        download="John_Doe_Resume.pdf" // Customize the downloaded file name
        className="resume-download-link"
      >
        <button className="resume-download-button">Download My Resume</button>
      </a>
    </section>
  );
};

export default Resume;
