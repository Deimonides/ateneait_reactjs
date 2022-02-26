import { useEffect, useState } from 'react'
import Item from './Item.jsx';

const ItemList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getItems()
    }, [])
    
    const getItems = () => {

        const getItemsPromise = new Promise( (resolve , reject) => {
            /* const URL = '../assets/productos.json' */
            /* const URL = 'https://rickandmortyapi.com/api/character' */
            const URL = 'https://fakestoreapi.com/products/category/electronics'
            setTimeout(() => {
                resolve(
                    fetch(URL)
                        .then ( res => res.json() )
                        .then ( res => {
                            console.log(res);
                            /* setProducts(res.results) */
                            setProducts(res)
                            /* setProducts(res) */
                        })
                        .catch(err => {
                            console.log("Detalle del error: " + err);
                        })
                )
            }, 2000);
        })       
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map ( prod => <Item props={prod} key={prod.id}></Item> )}
            
                    </div>
                </div>
            </section>
        </>
    )
}
export default ItemList