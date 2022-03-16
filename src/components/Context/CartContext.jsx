import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [itemsInCart, setitemsInCart] = useState([]);
    /* let [cantidadItems, setCantidadItems] = useState(0);    */

    function addItem(item, itemCant) {
        let buscarItem = itemsInCart.find(elemento => (elemento.id == item.id) ) // buscar el item si está en el carrito
        /* let buscarItem = itemsInCart.some( elemento => elemento.id === item.id ) */ // Otra forma: devuelve True o False si encuentra el item
        /* console.log( {buscarItem} ); */
        if (buscarItem == undefined) { // el producto NO existe en el carrito
           /*  console.log('Es indefinido --> Item nuevo en carrito'); */
            const itemNuevo = { ...item, itemCant }; // generar el objeto del item incluyéndole la cantidad
            setitemsInCart([...itemsInCart, itemNuevo]); // Se agrega item nuevo
            
        } else {
            /* console.log('No es indefinido --> Item existe en carrito'); */ // el producto SI existe en el carrito
            let itemRepetidoIndex = itemsInCart.findIndex( elemento => elemento.id == item.id )
            /* console.log('Item Repetido index: ', itemRepetidoIndex); */
            /* console.log('Item Repetido cant: ', itemsInCart[itemRepetidoIndex].itemCant); */
            
            /* setitemsInCart(itemsInCart[itemRepetidoIndex].itemCant = itemsInCart[itemRepetidoIndex].itemCant + itemCant ) */

            let itemsInCartCopia = [...itemsInCart]
            itemsInCartCopia[itemRepetidoIndex].itemCant += itemCant
            setitemsInCart(itemsInCartCopia)
            

        }
        console.log('Item agregado al carrito.');
        alert("Item agregado al carrito.")
        /* contarItems() */
    }

    /* const contarItems = () => { 
        let total = 0;
        let acc = 0;
        
        /* let total = itemsInCart.map ( element => { element.itemCant += total }  ) */
        /* itemsInCart.forEach ( function (element)  {total += element.itemCant} ) */
        /* itemsInCart.map(el => el.itemCant += total ).reduce((total, val) => total + val.itemCant, 0) */
        /* itemsInCart.reduce((acc, cur) => acc += cur.itemCant, 0)
        total = acc
        console.log('total: ' , total); */
        /* cantidadItems = itemsInCart.reduce( (acc, el) => acc + el.itemCant, 0) */
        /* cantidadItems = itemsInCart.map () */
        /* setCantidadItems = total;
        console.log('cantidadItems: ' , cantidadItems); 
    } */
    
    function clearCart() {
        setitemsInCart([]);
        console.log("Se vació el carrito de compras.");
        alert("Se vació el carrito de compras.")
    }

    return (
        <CartContext.Provider value={{ addItem, itemsInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;

