import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCq7qhxrykURkt8fy6mg2VLA_n_lqCZPlY",
  authDomain: "gbreact-5c650.firebaseapp.com",
  databaseURL:
    "https://gbreact-5c650-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbreact-5c650",
  storageBucket: "gbreact-5c650.appspot.com",
  messagingSenderId: "162834268752",
  appId: "1:162834268752:web:7753812375ccf581f90755",
  measurementId: "G-K1KSDTL5M6",
};

export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
