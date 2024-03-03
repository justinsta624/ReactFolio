// Importing necessary modules from React and a helper function
import React, { useState } from 'react';
import {
    validateEmail,
    validateUserName,
    validateMessage,
} from "../utils/helpers";
// Importing a helper function

// Contact component definition
export default function Contact() {
    // State variable to manage error messages
    const [errorMessage, setErrorMessage] = useState("");

    // Event handler for input blur events
    const handleBlur = (e) => {
        // Check if the blurred input is the "name" field
        if (e.target.name === "name") {
            // Validate the user name using the helper function
            if (!validateUserName(e.target.value)) {
                // Set an error message if the user name is not valid
                setErrorMessage("Username required");
            } else {
                // Clear the error message if the user name is valid
                setErrorMessage("");
            }
        }

        // Check if the blurred input is the "message" field
        if (e.target.name === "message") {
            // Validate the message using the helper function
            if (!validateMessage(e.target.value)) {
                // Set an error message if the message is not valid
                setErrorMessage("Message required");
            } else {
                // Clear the error message if the message is valid
                setErrorMessage("");
            }
        }

        // Check if the blurred input is the "email" field
        if (e.target.name === "email") {
            // Validate the email using the helper function
            if (!validateEmail(e.target.value)) {
                // Set an error message if the email is not valid
                setErrorMessage("A valid email is required");
            } else {
                // Clear the error message if the email is valid
                setErrorMessage("");
            }
        }
    };

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
                    <input type="text" className="form-control" id="name" placeholder="Write down your name" onBlur={handleBlur} />
                </div>

                {/* Input field for the user's email address */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Write down your email" onBlur={handleBlur} />
                </div>

                {/* Textarea for the user's message */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" rows="3" onBlur={handleBlur}></textarea>
                </div>
                <p>{errorMessage}</p>
                {/* Button to submit the form with a success message */}
                <button type="submit" className="btn btn-primary">Message sent successfully!</button>
            </form>
        </div>
    );
}