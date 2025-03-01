import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';
import reactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage'; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs5qj9l5_JaKPJLEp38mPZs4dHwPPS1Iw",
    authDomain: "hackathon-8186c.firebaseapp.com",
    projectId: "hackathon-8186c",
    storageBucket: "hackathon-8186c.firebasestorage.app",
    messagingSenderId: "1054678583686",
    appId: "1:1054678583686:web:f2a843b5183468848cc407",
    measurementId: "G-6FCFVB7C4E"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(reactNativeAsyncStorage)
});
export const db = getFirestore(app);

export const firebaseStorage = getStorage(app); 

export default app;
export { firebaseConfig };