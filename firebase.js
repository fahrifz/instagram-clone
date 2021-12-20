import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDY9bDKAv3jdNEteZeTfr1qn0ZWZGID0M",
  authDomain: "instagram-clone-61d01.firebaseapp.com",
  projectId: "instagram-clone-61d01",
  storageBucket: "instagram-clone-61d01.appspot.com",
  messagingSenderId: "325316357470",
  appId: "1:325316357470:web:11fbb17732e972a264f3cf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
