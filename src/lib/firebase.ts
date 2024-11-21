import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBErczOMMauwMGH-Bgy4CHWtLMgxVJLxJM",
    authDomain: "nextfire-9a5fb.firebaseapp.com",
    projectId: "nextfire-9a5fb",
    storageBucket: "nextfire-9a5fb.firebasestorage.app",
    messagingSenderId: "207055727266",
    appId: "1:207055727266:web:261f40c86276fd083605fb",
    measurementId: "G-CVVMVK9688",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
