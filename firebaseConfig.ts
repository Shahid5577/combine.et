
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCGPLUvC0L2ur0wLufFjArqERjKpu5N8zI",
  authDomain: "enershas-webportal.firebaseapp.com",
  projectId: "enershas-webportal",
  storageBucket: "enershas-webportal.appspot.com",
  messagingSenderId: "291338774829",
  appId: "1:291338774829:web:4cb3bed89ffa7e3bd04ba4",
  measurementId: "G-XZWY504GFT"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app); 
const storage = getStorage(app); 
const auth = getAuth();

// Export app, db, and storage
export { app, db, storage, auth };
