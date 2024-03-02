// Import the React library
import React from 'react';

// Define the ProjectCard component with destructured props (title, imageUrl, projectUrl)
function ProjectCard({ title, imageUrl, projectUrl }) {
    // Return JSX for rendering a project card
    return (
        // Card container with dark background and white text
        <div className="card bg-dark text-white flex-fill">
            {/* Anchor tag linking to the project URL, opening in a new tab */}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                {/* Ensure that the image is wrapped within the card-body */}
                <div className="card-body p-0">
                    {/* Image element with the source set to imageUrl and a card-img class */}
                    <img src={imageUrl} className="card-img" alt={title} />
                    {/* Container for the card image, aligning text to the bottom */}
                    <div className="card-img d-flex align-items-end p-0">
                        {/* Title text within a rounded-pill container with specified styling */}
                        <h5 className="text-white w-100 rounded-pill text-center bg-black bg-opacity-75 py-2">{title}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
}

// Export the ProjectCard component as the default export
export default ProjectCard;