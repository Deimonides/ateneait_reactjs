import { useEffect, useState } from 'react'
import JsonProductos from '../assets/productos.json'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
    // generador de numeros random
    // como no puedo decidir por un item arbitrariamente, implemento un random en cada carga
    const ItemRandom = ( min, max ) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const Indice = ItemRandom(0,11)
    console.log(Indice);
    
    
    const [productito, setProductito] = useState([])
  
    useEffect(() => {
        getItem()
    }, [])
    
    const getItem = () => {
    
        const getItemPromise = new Promise( (resolve , reject) => {
            setTimeout(() => {
                resolve(JsonProductos[Indice])
            }, 3000); // Desafío entregable:     solicita delay de 2 segundos.
        })  
        
        getItemPromise.then(
            datoX => {
                setProductito(datoX)
                console.log(datoX)
            }
        )
    } 
    
    return (
        <>
            <h2 className="text-2xl title-font font-medium text-blue-500">Detalle del prducto:</h2>
            <ItemDetail props={productito} ></ItemDetail>
        </>
    )
}

export default ItemDetailContainer