import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCdK_K80QQNojKopkp_enedrrEH__dalKE",
    authDomain: "coder-react-6f3b9.firebaseapp.com",
    projectId: "coder-react-6f3b9",
    storageBucket: "coder-react-6f3b9.appspot.com",
    messagingSenderId: "325302985360",
    appId: "1:325302985360:web:bf32a1c8fc1d108d4b6e15"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

