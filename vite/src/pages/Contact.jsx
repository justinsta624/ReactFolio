// Define the Contact component
function Contact() {
    // Return JSX for the Contact section
    return (
        // Container with styling for the Contact section
        <div className="contact-form-section text-center rounded-lg p-4">
            {/* Heading for the Contact section */}
            <h1>Contact</h1>

            {/* Form for user input with additional styling */}
            <form className="my-4">
                {/* Input field for the user's name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Write down your name" />
                </div>

                {/* Input field for the user's email address */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Write down your email" />
                </div>

                {/* Textarea for the user's message */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>

                {/* Button to submit the form with a success message */}
                <button type="submit" className="btn btn-primary">MSG send Successfully!</button>
            </form>
        </div>
    );
}

// Export the Contact component as the default export
export default Contact;