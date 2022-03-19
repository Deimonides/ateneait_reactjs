// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSGUwVz2-N-W65Ni9R7qY8KGl_lXr1HHM",
    authDomain: "ateneait-solotun.firebaseapp.com",
    projectId: "ateneait-solotun",
    storageBucket: "ateneait-solotun.appspot.com",
    messagingSenderId: "597413156042",
    appId: "1:597413156042:web:320e0db456a13ca3371033"
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
        /* console.log("getCategorias en fbC: ", element.data()); */
        dbCategorias.push(element.data())
    });
    return dbCategorias;
}


/* export const getFireStore = () => { return app } */