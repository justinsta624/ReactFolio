// Import the React library and the ProjectCard component from '../components'
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Define the Portfolio component
function Portfolio() {
    // Array of project objects containing title, description, imageUrl, and projectUrl
    const projects = [
        {
            title: 'Movie Review Application',
            description: '',
            imageUrl: '../project1.png',
            projectUrl: ['https://teamprojectmoviereview.github.io/Team-Project-/', 'https://github.com/justinsta624/MovieReviewApp']
        },
        {
            title: 'J.A.T.E',
            description: '',
            imageUrl: '../Challenge7.png',
            projectUrl: ['https://nameless-dusk-81129-0178012249db.herokuapp.com/', 'https://github.com/justinsta624/PWAJATE']
        },
        {
            title: 'MVC Tech Savvy',
            description: '',
            imageUrl: '../Challenge2.png',
            projectUrl: ['https://polar-journey-77005-c598f31c0871.herokuapp.com/', 'https://github.com/justinsta624/MVCTechSavvy']
        },
        {
            title: 'Weather Dashboard',
            description: '',
            imageUrl: '../Challenge6.png',
            projectUrl: ['https://justinsta624.github.io/WeatherDashboard/', 'https://github.com/justinsta624/WeatherDashboard']
        },
        {
            title: 'Work Day Scheduler',
            description: '',
            imageUrl: '../Challenge5.png',
            projectUrl: ['https://justinsta624.github.io/3rdPartyAPIs/', 'https://github.com/justinsta624/3rdPartyAPIs']
        },
        {
            title: 'Password Generator',
            description: '',
            imageUrl: '../Challenge3.png',
            projectUrl: ['https://justinsta624.github.io/JavapassgenC3/', 'https://github.com/justinsta624/JavapassgenC3']
        },
    ];

    // Return JSX for the Portfolio section
    return (
        // Container with margin at the top
        <div className="container mt-4">
            {/* Heading for the Portfolio section */}
            <h1 className="text-center text-white mb-4">Portfolio of full-stack projects</h1>

            {/* Row for displaying project cards */}
            <div className="row g-4">
                {/* Map through the projects array and render a ProjectCard for each project */}
                {projects.map((project, index) => (
                    <div className="col-md-6 d-flex" key={index}>
                        {/* Render a ProjectCard with the spread operator to pass project properties */}
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Export the Portfolio component as the default export
export default Portfolio;