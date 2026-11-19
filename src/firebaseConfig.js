// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "taskr-c9177.firebaseapp.com",
  projectId: "taskr-c9177",
  storageBucket: "taskr-c9177.firebasestorage.app",
  messagingSenderId: "115456186903",
  appId: "1:115456186903:web:342b7844827369c27f9a52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

// export const appStorage = createAsyncStorage("app");
// const persistence = getReactNativePersistence(ReactNativeAsyncStorage);
export const firebaseAuth = getAuth(app);