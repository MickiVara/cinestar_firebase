import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNt0_so_NHsihtzkOM3r8nlwiHW8XRsWk",
    authDomain: "cine-jp-989fc.firebaseapp.com",
    projectId: "cine-jp-989fc",
    storageBucket: "cine-jp-989fc.firebasestorage.app",
    messagingSenderId: "167331545737",
    appId: "1:167331545737:web:294f7fdfa5c4a5d42f3c58"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };