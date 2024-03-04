// Define the AboutMe component
function AboutMe() {
    // Return JSX for the About Me section
    return (
        // Container with styling for the About Me section
        <div className="contact-form-section  text-center rounded-lg p-4">
            {/* Heading for the About Me section */}
            <h1>⭐Hanbyeol Justin Lee⭐</h1>

            {/* Image of the developer with styling */}
            <img src="./myself.png" alt="Recent photo of the developer" className="img-fluid rounded my-3" style={{ maxWidth: '250px' }} />

            {/* Paragraph with information about the developer */}
            <p className="contact-form-section p-4">
                {/* Content describing the developer's background and skills */}
                UofT HBA graduate with major in Sociology and Economics<br />
                Dedicated Full-Stack Developer with a passion for crafting innovative solutions<br />
                <br />
                Thrive independently and in collaborative team environments, valuing effective communication and cooperation<br />
                Full-understanding of project management, coupled with critical thinking, and decision-making skills<br />
                <br />
                Excel in problem-solving, data collection, and organizational tasks, detailed-analysis contributes to the success of projects<br />
                Eager to bring technical expertise and collaborative spirit to contribute to team's achievements.
            </p>
        </div>
    );
}

// Export the AboutMe component as the default export
export default AboutMe;