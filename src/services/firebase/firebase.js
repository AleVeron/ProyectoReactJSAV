import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0VWkQFG6LGC4WNpaf1Q-KEobYpG77GJM",
    authDomain: "proyectoreactjs-av-46555.firebaseapp.com",
    projectId: "proyectoreactjs-av-46555",
    storageBucket: "proyectoreactjs-av-46555.appspot.com",
    messagingSenderId: "226019469894",
    appId: "1:226019469894:web:34b6fb5b32251c1c7f3847"
  };


//Inicializacion de la app  
const app = firebase.initializeApp(firebaseConfig)

//Creo la referencia de la base de datos (dataBase)
export const db = getFirestore(app)

