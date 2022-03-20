import { getProductos } from "../firebase/firebaseClient";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import NoItems from './NoItems';

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const { categoryID } = useParams();

    useEffect( () => {
        getProductos().then( prods => {
            /* console.log("getProductos en ILC2: ", prods); */
            
            if ( categoryID === "todo" ) {
                /* console.log('categoryID True', categoryID); */
                // Mapear todo => Mostrar todos los productos  
                setProductos(prods)
            } else {
                /* console.log('categoryID False', categoryID); */
                const arrayCateg = prods.filter( item => {
                    return (item.category).toLowerCase() === categoryID // Filtrar los productos que coincidan con la categoria
                })
                /* console.log( '@ItemListContainer@ arrayCateg', arrayCateg ); */
                setProductos(arrayCateg)
            }
                
        })
        /* getCategorias().then( categs => {
            console.log("getProductos en ILC2: ", categs);
        }) */
        
    }, [categoryID])
    
    
    return (
        <div>
            {productos.length > 0
            ? <ItemList propsILC={productos}></ItemList> // La categoria SI tiene productos
            : <NoItems /> // La categoria NO tiene productos
            }
        </div>
    )
}

export default ItemListContainer