import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LandingPage.css'; // Link your CSS styles

import ProfilePic from '../assets/images/mypic.jpeg'; // Your profile picture

const LandingPage = () => {
  return (
    <section id="landing" className="landing">
      <div className="landing-content">
        {/* Name and Title */}
        <motion.h1
          className="landing-name"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Surya Vadana
        </motion.h1>
        <motion.h2
          className="landing-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Web Developer
        </motion.h2>

        {/* Profile Image */}
        <motion.div
          className="landing-image-container"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src={ProfilePic}
            alt="Surya Vadana - Web Developer"
            className="landing-image"
          />
        </motion.div>

        {/* Technologies Section */}
        <div className="technologies-container">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Technologies I Know
          </motion.h3>
          <motion.div
            className="logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Display all logos at once, side by side */}
            <span className="tech-logo" style={{ animationDelay: '0.5s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/react.svg" alt="React" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '0.7s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/java.svg" alt="Java" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '0.9s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/javascript.svg" alt="JavaScript" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '1.1s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/html5.svg" alt="HTML5" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '1.3s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/css3.svg" alt="CSS3" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '1.5s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/bootstrap.svg" alt="Bootstrap" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '1.7s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/mysql.svg" alt="MySQL" />
            </span>
            <span className="tech-logo" style={{ animationDelay: '1.9s' }}>
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/springboot.svg" alt="Spring Boot" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
