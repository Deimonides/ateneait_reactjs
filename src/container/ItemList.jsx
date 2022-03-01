import { useEffect, useState } from 'react'
import ListaProductos from '../assets/productos.json'
import Item from './Item.jsx'

const ItemList = () => {
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getItems()
    }, [])
    
    
    const getItems = () => {
        const getItemsPromise = new Promise( (resolve , reject) => {
            /* const URL = '../assets/productos.json' */
            /* const URL = 'https://rickandmortyapi.com/api/character' */
            /* const URL = 'https://fakestoreapi.com/products/category/electronics' */
            
           /*  setTimeout(() => { */
                resolve(ListaProductos
                    /* fetch(URL)
                        .then ( res => res.json() )
                        .then ( res => {
                            console.log(res);
                            setProducts(res)
                        })
                        .catch(err => {
                            console.log("Detalle del error: " + err);
                        }) */
                )
            /* }, 2000); */
        })  
        
        getItemsPromise.then(
            productos => {
                setProductos(productos)
                console.log(productos)
            })
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {/* {products.map ( prod => <Item props={prod} key={prod.id}></Item> )} */}
                        {productos.map ( p => <Item key={p.id} props={p} ></Item> )}
            
                    </div>
                </div>
            </section>
        </>
    )
}
export default ItemList