import { useEffect, useState } from 'react'
import JsonProductos from '../assets/productos.json'
import ItemList from './ItemList.jsx';

function ItemListContainer() {
  
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getItems()
    }, [])
    
    const getItems = () => {
    
            const getItemsPromise = new Promise( (resolve , reject) => {
                setTimeout(() => {
                    
                    resolve(JsonProductos)
                }, 2000); // Desafío entregable: solicita delay de 2 segundos.
            })  
        
        getItemsPromise.then(
            datos => {
                console.log(datos)
                setProductos(datos)
            }
        )
    }

    return (
        <div>
           <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer