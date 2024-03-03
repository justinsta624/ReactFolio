// Import the React library
import React from 'react';

// Import the Navigation component from './Navigation'
import Navigation from './Navigation';

// Define the Header component
function Header() {
    // Return the header JSX
    return (
        // Header container with styling
        <header className="text-white py-3" style={{ backgroundColor: 'black', color: 'white', padding: '10px', position: 'sticky', top: '0', zIndex: '100' }}>
            {/* Container for header content */}
            <div className="container d-flex justify-content-between align-items-center" style={{ backgroundColor: 'black' }} >
                {/* Header title */}
                <h1> 🚀ReactFolio💾 </h1>

                {/* Render the Navigation component */}
                <Navigation />
            </div>
            {/* End of container */}
        </header>
        // End of header
    );
}

// Export the Header component as the default export
export default Header;