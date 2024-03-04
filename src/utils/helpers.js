// Function to validate an email address using a regular expression
export function validateEmail(email) {
    // Regular expression for validating email addresses
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    // Test if the provided email matches the regular expression
    return re.test(String(email).toLowerCase());
}

// Function to validate a user name based on its length
export function validateUserName(input) {
    // Check if the length of the input is greater than 0
    return input.length > 0;
}

// Function to validate a message based on its length
export function validateMessage(input) {
    // Check if the length of the input is greater than 0
    return input.length > 0;
}  