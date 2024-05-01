import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXWhxulr5VTiB-V6xSIYHI1RvGDECG8MQ",
    authDomain: "my-project-b98c2.firebaseapp.com",
    databaseURL: "https://my-project-b98c2-default-rtdb.firebaseio.com",
    projectId: "my-project-b98c2",
    storageBucket: "my-project-b98c2.appspot.com",
    messagingSenderId: "413764201866",
    appId: "1:413764201866:web:426c8e6793553abfaeac73",
    measurementId: "G-TBPDD24R2Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };