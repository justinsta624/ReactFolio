import React from 'react';

// Functional component for the Resume page
const Resume = () => {

    return (
        <div style={{ marginBottom: '150px' }}>
            {/* Resume heading */}
            <h1 className="contact-form-section text-center rounded-lg p-4"> Résumé / Curriculum Vitae </h1>

            {/* Link to download the resume */}
            <h2 className="contact-form-section rounded-pill bg-black text-center rounded-lg p-4">
                Download my <a href="https://drive.google.com/file/d/1wR3KJoxoFE5l1JSNCPxNFfiBJVRdePMI/view?usp=sharing" style={{ backgroundColor: 'black' }}>Résumé</a>
            </h2>

            {/* Front-End section */}
            <section className="contact-form-section rounded-lg p-4">
                <h2>Front-End:</h2>
                {/* List of Front-End technologies */}
                <ul>
                    <li>HTML5: Standard markup language used to create and structure content on the application.</li>
                    <li>CSS: Cascading Style Sheets for styling web pages.</li>
                    <li>JavaScript: Programming language primarily used for building dynamic, interactive, and client-side web applications.</li>
                    <li>jQuery: JavaScript library designed to simplify the client-side scripting of HTML.</li>
                    <li>React: Open-source JS library used for building user interfaces or UI components, particularly for single-page applications where user interactions are dynamic and frequent.</li>
                </ul>
            </section>

            {/* Back-End section */}
            <section className="contact-form-section rounded-lg p-4">
                <h2>Back-End:</h2>
                {/* List of Back-End technologies */}
                <ul>
                    <li>Node.js: Runtime environment for executing server-side JavaScript code.</li>
                    <li>Express: Web application framework for building RESTful APIs.</li>
                </ul>
            </section>

            {/* APIs & Databases section */}
            <section className="contact-form-section rounded-lg p-4">
                <h2>APIs & Databases:</h2>
                {/* List of APIs and Databases */}
                <ul>
                    <li>MySQL: Open-source RDBMS that is widely used for managing and organizing structured data.</li>
                    <li>MongoDB: NoSQL database for storing data in JSON-like documents.</li>
                    <li>RESTful APIs: Architectural style for designing networked applications.</li>
                    <li>Insomnia: Open-source API testing and design platform that provides a user-friendly interface for designing, testing, and debugging APIs.</li>
                </ul>
            </section>

            {/* Other Tools and Version Control section */}
            <section className="contact-form-section rounded-lg p-4">
                <h2>Other Tools and Version Control:</h2>
                {/* List of other tools and version control systems */}
                <ul>
                    <li>GitHub: Web-based platform and service that provides hosting for software development and version control using Git</li>
                    <li>JSON: JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.</li>
                    <li>Webpack: Module bundler that helps bundle and manage static assets for web application.</li>
                    <li>Vite: Build tool and development server for modern web development projects.</li>
                    <li>Coolors: Online platform and mobile application that helps users generate color schemes for various design projects.</li>
                    <li>Heroku: Cloud platform that offers easy deployment and management of web applications.</li>
                    <li>Netlify: Web development platform that provides a variety of services to simplify the process of building, deploying, and managing modern web projects.</li>
                </ul>
            </section>

        </div>
    )
}

// Exporting the Resume component
export default Resume;