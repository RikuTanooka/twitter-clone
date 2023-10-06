import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBT9rIbcEPPZHA4INdcEWlRUUVFJcpIbuI",
    authDomain: "twitter-clone-udemy-6215f.firebaseapp.com",
    projectId: "twitter-clone-udemy-6215f",
    storageBucket: "twitter-clone-udemy-6215f.appspot.com",
    messagingSenderId: "402274580683",
    appId: "1:402274580683:web:cdd37c8cb29502dc98034e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
