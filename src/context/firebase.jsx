import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { createContext } from "react";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_aYNNLmvlTaQWLx_cVRPx2nFVJdRcWMM",
    authDomain: "murious-website-app.firebaseapp.com",
    projectId: "murious-website-app",
    storageBucket: "murious-website-app.appspot.com",
    messagingSenderId: "81848111675",
    appId: "1:81848111675:web:34c5759d6e22dfa97ac21e",
    measurementId: "G-PH0NG823JG"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

const db = getFirestore(app);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const signupUserUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const registerUserforEvents = async () => {
        const docRef = await addDoc(collection(db, "registeredEvents"), {
            username: "Animesh",
            event1: true,
            event2: true,
        });
    }

    return <FirebaseContext.Provider
        value={{signupUserUsingGoogle, registerUserforEvents}}
    >
        {props.children}
    </FirebaseContext.Provider>
}