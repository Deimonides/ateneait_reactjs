import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import JsonProductos from '../../assets/productos.json'
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer(props) {

    const { id } = useParams();
  
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getItem()
    }, [])
    
    const getItem = () => {
    
        const getItemPromise = new Promise( (resolve , reject) => {
            const itemSeleccionado = JsonProductos.find( item => {
                return item.id === id
            })
            resolve(itemSeleccionado)
        })  
        
        getItemPromise.then(
            dato => {
               /*  console.log(dato) */
                setProducto(dato)
            }
        )
    }

    return (
        <div>            
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