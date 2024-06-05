import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATZtwZgO9y7VT-k7F4E0rWV5o4NunlkZE",
    authDomain: "wordweave-7ea05.firebaseapp.com",
    projectId: "wordweave-7ea05",
    storageBucket: "wordweave-7ea05.appspot.com",
    messagingSenderId: "358198398778",
    appId: "1:358198398778:web:7d5a3e3b68f02624730a03"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}