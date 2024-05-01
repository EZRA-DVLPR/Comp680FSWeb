// Import the LoginForm component for use in the App
import LoginForm from "./components/loginform";
// Import the main stylesheet for the application
import './App.css'; // Import React library for creating components
import React, { useState, useEffect } from 'react';
// Import the SignIn component, though it's not used in the current version of App
import SignIn from './signin';
import { auth } from './firebase'; // Import the auth object from the Firebase configuration

// Define the App component
function App() {   // The component returns JSX for the App
  return (     // A div element with a class "page" used as the main container
    <div className="page">
      <LoginForm />
    </div>
  );
}

// Export the App component so it can be used in other parts of the application
export default App;