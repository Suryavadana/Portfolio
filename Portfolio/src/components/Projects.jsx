import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const ProjectData = [
        {
            title: 'Local Event Finder',
            description: 'The celebrity site owner curates events and activities in the St. Louis metro area to share with the world through the eyes of a famously knowledgeable and experienced local. This individual, renowned for their popular articles, books, guides, and media appearances, has become a household name as someone who truly knows what’s happening in the area. The platform invites the public to contact the celebrity directly or register for access to additional features, such as submitting events for consideration, saving favorite events, purchasing admission tickets, and checking the local weather forecast for upcoming events.',
            link: 'https://github.com/ALLHUBS-Jan-2024-Liftoff/Confidence',
            image: 'project1-image.jpg',
        },
        {
            title: 'Memory Game',
            description: 'This engaging memory game offers a thrilling experience across 9 multi-level stages, challenging players to match pairs of cards while keeping track of their progress. Each level is equipped with a convenient reset button, allowing players to restart at any time, as well as a next button to seamlessly advance to the subsequent level. For those looking to skip a particularly tricky stage, a dedicated skip level option is also available. The user-friendly navbar provides quick access to the Home and Game sections, while a toggle feature enables players to maximize the game window for an immersive experience. The entire interface is styled using Bootstrap CSS, ensuring a responsive and visually appealing design. Additionally, players can monitor their skills with a count of the total number of flips made during gameplay, adding a competitive edge to the fun. Built with React and enhanced with Bootstrap CSS, this game combines modern technology with an enjoyable user experience.',
            link: 'https://github.com/Suryavadana/MemoryGame',
            image: 'project2-image.jpg',
        },
        {
            title: 'To-Do List',
            description: 'The To-Do List app enables users to add tasks to a list, with the ability to edit, save, and delete items. I built this application using React for the frontend, providing an interactive and dynamic user experience. For the backend, I utilized Node.js, while styling was done with CSS to ensure a clean and responsive interface.',
            link: 'https://github.com/Suryavadana/TO-DO-LIST',
            image: 'project3-image.png',
        },
    ];

    return (
        <section id="projects" className="project-card" data-aos="fadeup">
            <h2>My Projects</h2>
            <div className="project-grid">
                {ProjectData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img 
                            src={`./assets/images/${project.image}`} 
                            alt={project.title} 
                            className="project-image" 
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
