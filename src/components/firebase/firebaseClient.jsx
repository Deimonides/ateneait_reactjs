// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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
const db = getFirestore() 
const productosColeccion = collection(db, "productos")
const categoryColeccion = collection(db, "category")
const comprasColeccion = collection(db, "compras")

export const getProductos = async () => {
    const querySnapshot = await getDocs( productosColeccion )
    let dbProductos = []
    querySnapshot.forEach(element => {
        /* console.log("getProductos en fbC: ", element.data()); */
        dbProductos.push(element.data())
        /* dbProductos.push({ id: element.id, ...element.data() }) // para incluir el ID de FS en el array local */
    });
    return dbProductos;
}

export const getCategorias = async () => {
    const querySnapshot = await getDocs( categoryColeccion )
    let dbCategorias = []
    querySnapshot.forEach(element => {
        /* console.log("getCategorias en fbC: ", element.id, element.data()); */
        dbCategorias.push({id: element.id, ...element.data()})
    });
    return dbCategorias;
}

export const grabarCompra = async (array) => {
    const respuesta = await addDoc(comprasColeccion, array)
    return respuesta
}
