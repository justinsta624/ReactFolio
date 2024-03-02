// Import the React library
import React from 'react';

// Import the ReactDOM module (specifically the createRoot function) from 'react-dom/client'
import ReactDOM from 'react-dom/client';

// Import the main App component from './App.jsx'
import App from './App.jsx';

// Import the styles from './index.css'
import './index.css';

// Import the styles from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Use ReactDOM's createRoot function to render the app into the element with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the App component in React.StrictMode for additional development checks
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);