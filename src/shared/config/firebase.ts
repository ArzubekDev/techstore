// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_0mSpFuH4nZZXx9NcXnBVsZo8COD4x0w',
  authDomain: 'tech-store-5b8a7.firebaseapp.com',
  projectId: 'tech-store-5b8a7',
  storageBucket: 'tech-store-5b8a7.firebasestorage.app',
  messagingSenderId: '320744751461',
  appId: '1:320744751461:web:06614cc4d1ca621885e18c',
  measurementId: 'G-JCNWV0R3L5',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
