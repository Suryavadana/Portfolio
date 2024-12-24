import React from 'react';
import '../styles/Projects.css';
import Project1Image from '../assets/images/project-1.png';
import Project2Image from '../assets/images/project-2.png';
import Project3Image from '../assets/images/project-3.png';

const Projects = () => {
  const ProjectData = [
    {
      title: 'Local Event Finder',
      description: 'A platform where a celebrity curates events and activities in the St. Louis metro area, offering the public access to additional features like event submissions, ticket purchases, and weather updates.',
      link: 'https://github.com/ALLHUBS-Jan-2024-Liftoff/Confidence',
      image: Project1Image,
    },
    {
      title: 'Memory Game',
      description: 'A multi-level memory game built with React. The game tracks player progress, offers reset and skip options, and is styled using Bootstrap CSS for a responsive, immersive experience.',
      link: 'https://github.com/Suryavadana/MemoryGame',
      image: Project2Image,
    },
    {
      title: 'To-Do List',
      description: 'A simple To-Do List app with functionality to add, edit, and delete tasks, built using React for the frontend and Node.js for the backend.',
      link: 'https://github.com/Suryavadana/TO-DO-LIST',
      image: Project3Image,
    },
  ];

  return (
    <section id='projects' className='projects'>
      <div className='projects-container'>
        <h2>My Projects</h2>
        <div className='projects-grid'>
          {ProjectData.map((project, index) => (
            <div className='project-card' key={index}>
              <div className='project-image'>
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='project-link'
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
