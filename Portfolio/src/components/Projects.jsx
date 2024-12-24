import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';
import Project1Image from '../assets/images/project-1.png';
import Project2Image from '../assets/images/project-2.png';
import Project3Image from '../assets/images/project-3.png';

const Projects = () => {
  const navigate = useNavigate();

  const ProjectData = [
    {
      id: 1,
      title: 'Local Event Finder',
      image: Project1Image,
    },
    {
      id: 2,
      title: 'Memory Game',
      image: Project2Image,
    },
    {
      id: 3,
      title: 'To-Do List',
      image: Project3Image,
    },
  ];

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`); // Navigate to the project details page
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {ProjectData.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleProjectClick(project.id)} // Redirect on click
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
