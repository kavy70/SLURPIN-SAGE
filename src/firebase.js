import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDB_-d-Tx7wi5hhagq1LMmeaLGH6ikNH_g",
    authDomain: "slurpin-sage.firebaseapp.com",
    projectId: "slurpin-sage",
    storageBucket: "slurpin-sage.firebasestorage.app",
    messagingSenderId: "496868645145",
    appId: "1:496868645145:web:08d4d7f2eff8fd20148d88",
    measurementId: "G-JW99PG3JYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }; 