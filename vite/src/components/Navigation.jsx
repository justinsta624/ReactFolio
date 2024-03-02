// Import the React library and the Link component from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Navigation component
function Navigation() {
    // Return JSX for the navigation bar
    return (
        // Navbar container with styling
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black', position: 'sticky', top: '0', zIndex: '100' }}>
            {/* Container for navbar content with additional styling */}
            <div className="container" style={{ backgroundColor: 'black' }}>
                {/* Button for toggling the navbar on smaller screens */}
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Navbar toggler icon with custom styling */}
                    <span className="navbar-toggler-icon" style={{ backgroundColor: 'black', borderColor: 'white' }}></span>
                </button>
                {/* Navbar content container */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Unordered list for navbar links aligned to the right */}
                    <ul className="navbar-nav ms-auto">
                        {/* Navbar link for the 'About Me' page */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/">About Me</Link>
                        </li>
                        {/* Navbar link for the 'Portfolio' page */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/portfolio">Portfolio</Link>
                        </li>
                        {/* Navbar link for the 'Contact' page */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/contact">Contact</Link>
                        </li>
                        {/* Navbar link for the 'Resume' page */}
                        <li className="nav-item">
                            <Link className="nav-link text-white" style={{ backgroundColor: 'black' }} to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Export the Navigation component as the default export
export default Navigation;