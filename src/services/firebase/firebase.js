import * as firebase from 'firebase/app'
import { getFirestore, QuerySnapshot } from 'firebase/firestore'
import { collection, getDocs, query, where } from "firebase/firestore";


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

export const getProductos = (key, operador, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery = key && operador && value ?
    query(collection(db, "items"), where(key, operador, value)) : 
    collection(db, 'items')

    getDocs(collectionQuery).then((querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
      resolve(productos)
    }).catch(error => {
      reject('Error al obtener los productos: ', error)
    })
  })

}
