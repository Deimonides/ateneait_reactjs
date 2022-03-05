import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JsonProductos from '../assets/productos.json'
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer(props) {

    const { id } = useParams();
  
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getItem()
    }, [])
    
    const getItem = () => {
    
        const getItemPromise = new Promise( (resolve , reject) => {
            /* setTimeout(() => { */
                const itemSeleccionado = JsonProductos.find( item => {
                    /* console.log('@ItemDetailContainer@ item.id:',item.id, typeof(item.id)); */
                    /* console.log('@ItemDetailContainer@ id:', id, typeof(id)); */
                    /* console.log("@ItemDetailContainer@ Iguales? ", item.id === id); */
                    return item.id === id
                })
                resolve(itemSeleccionado)
           /*  }, 2000); // Desafío entregable: solicita delay de 2 segundos. */
        })  
        
        getItemPromise.then(
            dato => {
                console.log(dato)
                setProducto(dato)
            }
        )
    }

    return (
        <div>
            {/* <h2>Estamos en: <strong>ItemDetailContainer</strong></h2> */}
            
            <ItemDetail 
                id={producto.id} 
                name={producto.name} 
                type={producto.type} 
                image={producto.image} 
                description={producto.description} 
                price={producto.price} 
                stock={producto.stock} 
            ></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer