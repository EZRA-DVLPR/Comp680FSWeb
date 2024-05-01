// Import the necessary Firebase modules to initialize the app and handle authentication
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configuration object containing your Firebase project details
const firebaseConfig = {
    apiKey: "AIzaSyDXWhxulr5VTiB-V6xSIYHI1RvGDECG8MQ", // Your Firebase API key
    authDomain: "my-project-b98c2.firebaseapp.com", // Your Firebase Auth domain
    databaseURL: "https://my-project-b98c2-default-rtdb.firebaseio.com", // Your Firebase Database URL
    projectId: "my-project-b98c2", // Your Firebase project ID
    storageBucket: "my-project-b98c2.appspot.com", // Your Firebase storage bucket URL
    messagingSenderId: "413764201866", // Your Firebase messaging sender ID
    appId: "1:413764201866:web:426c8e6793553abfaeac73",  // Your Firebase app ID
    measurementId: "G-TBPDD24R2Q" // Your Firebase measurement ID
};

// Initialize the Firebase application with the specified configuration
const firebaseApp = initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Auth service for the initialized app
const auth = getAuth(firebaseApp);
// Create a new instance of the GoogleAuthProvider class for Google authentication
const googleProvider = new GoogleAuthProvider();

// Export the auth and googleProvider objects for use in other parts of the application
export { auth, googleProvider };