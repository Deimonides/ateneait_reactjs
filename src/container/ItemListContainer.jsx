import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JsonProductos from '../assets/productos.json'
import ItemList from './ItemList.jsx';

function ItemListContainer() {
    
    const [productos, setProductos] = useState([])
    const { categoryID } = useParams();
    console.log('@ItemListContainer@ Qué category?', categoryID, typeof(categoryID) );

    useEffect(() => {
        getItems(categoryID)
    }, [categoryID])
    
    const getItems = ( categoryID ) => {
        const getItemsPromise = new Promise( (resolve , reject) => {
            setTimeout(() => {
                if ( categoryID == "todo" ) {
                    console.log('True', categoryID);
                    resolve(JsonProductos) // Mapear todo =>Mostrar todos los productos  
                } else {
                    console.log('False', categoryID);
                    const arrayCateg = JsonProductos.filter( item => {
                        return (item.category).toLowerCase() == categoryID
                    })
                    resolve(arrayCateg)
                    console.log( '@ItemListContainer@ arrayCateg', arrayCateg );
                }
            }, 2000); // Desafío entregable: solicita delay de 2 segundos.
        })  

        getItemsPromise.then(
            datos => {
                setProductos(datos)
                console.log('@ItemListContainer@: datos =', datos)
            }
        )
    }
   
    return (
        <div>
            <ItemList propsILC={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer