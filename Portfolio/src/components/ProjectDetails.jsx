import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams(); // Extract project ID from URL

  // Define detailed project data
  const projects = {
    1: {
      title: 'Local Event Finder',
      description: 'The Local Event Finder is a platform designed to showcase events and activities in the St. Louis metro area.',
      details: [
        {
          heading: 'Key Features',
          points: [
            'About and Contact Page: Highlights the celebrity curator’s background and provides a user-friendly contact form.',
            'Event Listing Landing Page: Displays curated events in a tile-based layout with filters for date, location, price, and event type.',
            'Registered User Features: Options to add events to a shopping cart, save events to favorites, and check weather forecasts.',
          ],
        },
        {
          heading: 'Administrative Capabilities',
          points: [
            'Full CRUD Functionality: Create, read, update, and delete events.',
            'Relational Database Integration: Stores events in a MySQL database for efficient data management.',
          ],
        },
        {
          heading: 'External API Integration',
          points: [
            'National Weather Service API for real-time weather updates.',
            'Detailed weather information accessible via event details page.',
          ],
        },
        {
          heading: 'Projected Tech Stack',
          points: [
            'Back-End Technologies: Java and Spring Framework.',
            'Front-End Technologies: React, Bootstrap, and JavaScript.',
            'Database: MySQL for structured data storage.',
            'API Architecture: RESTful API for seamless communication.',
          ],
        },
      ],
      link: 'https://github.com/ALLHUBS-Jan-2024-Liftoff/Confidence',
    },
    2: {
      title: 'Memory Game',
      description: 'The Memory Game is an engaging and interactive application designed to challenge players across 9 multi-level stages.',
      details: [
        {
          heading: 'Key Features',
          points: [
            'Game Levels and Progression: Offers 9 multi-level stages with reset, next, and skip level options.',
            'Navigation and User Controls: Includes a user-friendly navbar and a toggle feature to maximize the game window.',
            'Gameplay Metrics: Tracks the total number of flips during gameplay, adding a competitive element.',
            'Responsive Design: Styled using Bootstrap CSS for a visually appealing and responsive layout.',
          ],
        },
        {
          heading: 'Technologies Used',
          points: [
            'Front-End Technologies: React and Bootstrap CSS.',
            'API Architecture: Potential integration with external APIs for future updates.',
          ],
        },
      ],
      link: 'https://github.com/Suryavadana/MemoryGame',
    },
    3: {
        title: 'To-Do List',
        description: 'The To-Do List is a simple yet powerful application designed to help users manage their tasks efficiently.',
        details: [
          {
            heading: 'Key Features',
            points: [
              'Task Management: Add, edit, and delete tasks with ease.',
              'Completion Tracking: Mark tasks as completed to stay on top of your schedule.',
              'Categorization: Organize tasks by priority for better time management.',
              'Intuitive Design: User-friendly interface for seamless navigation.',
            ],
          },
          {
            heading: 'Responsive Design',
            points: [
              'Styled with Bootstrap CSS for a sleek and responsive interface.',
              'Compatible across various devices, ensuring usability on both desktop and mobile.',
            ],
          },
          {
            heading: 'Technologies Used',
            points: [
              'React: For dynamic and interactive user experiences.',
              'Bootstrap CSS: To provide a responsive and visually appealing layout.',
              'Local Storage API: For persistent data storage, enabling tasks to remain accessible across sessions.',
            ],
          },
        ],
        link: 'https://github.com/Suryavadana/TO-DO-LIST',
      },

    };

  // Get the selected project data
  const project = projects[id];

  // Handle invalid project ID
  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.details.map((section, index) => (
        <div key={index} className="project-section">
          <h2>{section.heading}</h2>
          <ul>
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;
