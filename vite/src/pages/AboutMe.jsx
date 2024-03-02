// Define the AboutMe component
function AboutMe() {
    // Return JSX for the About Me section
    return (
        // Container with styling for the About Me section
        <div className="contact-form-section  text-center rounded-lg p-4">
            {/* Heading for the About Me section */}
            <h1>About Me</h1>

            {/* Image of the developer with styling */}
            <img src="./public/myself.png" alt="Recent photo of the developer" className="img-fluid rounded my-3" style={{ maxWidth: '250px' }} />

            {/* Paragraph with information about the developer */}
            <p className="contact-form-section  p-4">
                {/* Content describing the developer's background and skills */}
                As a University of Toronto Honours Bachelor of Arts graduate, I am Hanbyeol Justin Lee, a dedicated Full-Stack Developer
                with a passion for crafting innovative solutions. I thrive both independently and in collaborative team environments, valuing
                effective communication and cooperation. My foundational understanding of project management, coupled with critical thinking
                and decision-making skills, enables me to take a methodical approach to reviewing cases and responding promptly. I excel in
                problem-solving, data collection, and organizational tasks, ensuring meticulous attention to detail that contributes to the
                success of projects. With a commitment to continuous learning and staying abreast of industry trends, I am eager to bring my
                technical expertise and collaborative spirit to contribute to your team's achievements.
            </p>
        </div>
    );
}

// Export the AboutMe component as the default export
export default AboutMe;