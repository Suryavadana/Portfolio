import React from 'react';
import '../styles/About.css';
import ProfilePic from '../assets/images/mypic.jpeg';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-header'>
            <h2>About Me</h2>
            <div className='about-image'>
              <img src={ProfilePic} alt="Surya Vadana - Web Developer" />
            </div>
          </div>
            <p>I am Surya Vadana, a web developer skilled in both front-end and back-end technologies. I specialize in building scalable, high-performance web applications with a focus on user-centric design. On the front end, I use HTML, CSS, JavaScript, and frameworks like ReactJS to create responsive, accessible interfaces. For back-end development, I leverage Node.js, Java, and Spring Boot to build efficient and secure server-side systems. I also have expertise in MySQL for database management and API testing with Postman. Committed to writing clean, maintainable code, I stay updated with the latest technologies to deliver exceptional web experiences.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
