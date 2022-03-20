import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JsonProductos from '../../assets/productos.json'
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer(  ) {
    const { id } = useParams();
    const [producto, setProducto] = useState([])

    useEffect(() => {
        
    
    
        function getItem() {
            const getItemPromise = new Promise( (resolve) => {
                const itemSeleccionado = JsonProductos.find( item => {
                    return item.id === id
                })
                resolve(itemSeleccionado)
            })  
            getItemPromise.then(
                dato => {
                    setProducto(dato)
                    /* console.log(dato) */
                }
            )
        }
        getItem()
    }, [])
    
    return (
        <div>            
            <ItemDetail item={producto}
                /*name={producto.name} 
                type={producto.type} 
                image={producto.image} 
                description={producto.description} 
                price={producto.price} 
                stock={producto.stock}  */
            ></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer