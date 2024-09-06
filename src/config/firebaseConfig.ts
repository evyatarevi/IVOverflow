import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLQvUFD3ezQ6bFZOqKTo9fL8rjza2FCiM",
  authDomain: "ivoverflow.firebaseapp.com",
  projectId: "ivoverflow",
  storageBucket: "ivoverflow.appspot.com",
  messagingSenderId: "1075799002548",
  appId: "1:1075799002548:web:65d4fd58ae0577746f36e1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
