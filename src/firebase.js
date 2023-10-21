import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4fbJj83oX77G4isouwie0d5cCozjeQlU",
  authDomain: "portfolio-b420d.firebaseapp.com",
  projectId: "portfolio-b420d",
  storageBucket: "portfolio-b420d.appspot.com",
  messagingSenderId: "708650158516",
  appId: "1:708650158516:web:b44eb429aa2d37f29c8ae1",
  measurementId: "G-T55XE2RRY0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
