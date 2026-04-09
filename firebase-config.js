// Import des modules Firebase (v10 via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Ma configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAX-TZmfRgn0kf6JjH5WymxVXtie6bb5wc",
  authDomain: "lighther-694b3.firebaseapp.com",
  projectId: "lighther-694b3",
  storageBucket: "lighther-694b3.firebasestorage.app",
  messagingSenderId: "239266315207",
  appId: "1:239266315207:web:ae9667176658daf88277e2",
  measurementId: "G-PGKJMRGTSG"
};


//  Initialisation Firebase
const app = initializeApp(firebaseConfig);


//  Services
const auth = getAuth(app);
const db = getFirestore(app);


//  Export
export { auth, db };
