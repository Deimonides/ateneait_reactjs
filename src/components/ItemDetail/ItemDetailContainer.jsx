import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { getProductos } from "../firebase/firebaseClient";
/* import JsonProductos from '../../assets/productos.json' */

function ItemDetailContainer(  ) {
    const { id } = useParams();
    const [producto, setProducto] = useState([])
  
    useEffect(() => {
        getProductos().then((prods) => { 
            const itemSeleccionado = prods.find( item => { return item.id === id })
            setProducto(itemSeleccionado); 
        })
    }, []);
    
    return (
        <div>            
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer