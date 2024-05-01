// Import necessary modules from React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Import the SignIn component
import SignIn from './signin';

// Import Firebase modules for initialization and authentication
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "Your-API-Key",
    authDomain: "Your-Auth-Domain",
    databaseURL: "Your-Database-URL",
    projectId: "Your-Project-ID",
    storageBucket: "Your-Storage-Bucket",
    messagingSenderId: "Your-Messaging-Sender-ID",
    appId: "Your-App-ID",
    measurementId: "Your-Measurement-ID"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Create a theme for the app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#fff',
    },
  },
});

// Create a root for rendering the app
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app with SignIn component wrapped in ThemeProvider and CssBaseline
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn auth={auth} googleProvider={googleProvider} />
    </ThemeProvider>
  </React.StrictMode>
);
