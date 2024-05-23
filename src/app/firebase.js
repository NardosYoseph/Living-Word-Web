import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { signInAnonymously } from 'firebase/auth'; 

// Initialize Firebase app
const app = initializeApp(firebaseConfig);


// Initialize Firebase services
const storage = getStorage(app);
const auth = getAuth(app);
signInAnonymously(auth).catch((error) => {
    console.error('Error signing in anonymously:', error);
  });
export { app, storage,auth };
