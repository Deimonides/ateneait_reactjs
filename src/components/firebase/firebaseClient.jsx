// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore() 

export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"))
    let dbProductos = []
    querySnapshot.forEach(element => {
        /* console.log("getProductos en fbC: ", element.data()); */
        dbProductos.push(element.data())
    });
    return dbProductos;
}

export const getCategorias = async () => {
    const querySnapshot = await getDocs(collection(db, "category"))
    let dbCategorias = []
    querySnapshot.forEach(element => {
        /* console.log("getCategorias en fbC: ", element.id, element.data()); */
        dbCategorias.push({id: element.id, ...element.data()})
    });
    return dbCategorias;
}


/* export const getFireStore = () => { return app } */