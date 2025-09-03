// 🔐 STEP 1: Add your Firebase config here
export const firebaseConfig = {
  apiKey: "AIzaSyCIY6G6efH-K_EOxjfaPxxhVxBFkZCOEVw",
  authDomain: "lobe-luxe.firebaseapp.com",
  projectId: "lobe-luxe",
  storageBucket: "lobe-luxe.firebasestorage.app",
  messagingSenderId: "569143855755",
  appId: "1:569143855755:web:5d495787799bf540a3228e",
  measurementId: "G-KGTZNGH5DV"                    
};

// 🚀 STEP 2: Import Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ⚙️ STEP 3: Initialize Firebase app
const app = initializeApp(firebaseConfig);

// 📦 STEP 4: Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;