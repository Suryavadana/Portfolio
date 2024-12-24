import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import '../styles/Header.css'; // Styling for the header
import resume from '../assets/files/Surya_Resume.pdf'; // Import the resume file

const Header = () => {
  return (
    <header className="header">
      <motion.div
        className="header-name"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>Surya Vadana | Web Developer</h3>
      </motion.div>
      <nav>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/certification">Certification</Link>
          </motion.li>
          {/* New Resume Link */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href={resume}
              download="Surya_Vadana_Resume.pdf" // Set the download file name
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
