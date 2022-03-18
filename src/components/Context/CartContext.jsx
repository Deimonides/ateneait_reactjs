import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([]);
    let [totales, setTotales] = useState(0);   

    function addItem(item, itemCant) {
        let buscarItem = itemsInCart.find(elemento => (elemento.id == item.id) ) // buscar el item si está en el carrito
        /* let buscarItem = itemsInCart.some( elemento => elemento.id === item.id ) */ // Otra forma: devuelve True o False si encuentra el item
        /* console.log( {buscarItem} ); */
        if (buscarItem == undefined) { // el producto NO existe en el carrito
           /*  console.log('Es indefinido --> Item nuevo en carrito'); */
            const itemNuevo = { ...item, itemCant }; // generar el objeto del item incluyéndole la cantidad
            setItemsInCart([...itemsInCart, itemNuevo]); // Se agrega item nuevo
            console.log('array: ' , [...itemsInCart]);
        } else {
            /* console.log('No es indefinido --> Item existe en carrito'); */ // el producto SI existe en el carrito
            let itemRepetidoIndex = itemsInCart.findIndex( elemento => elemento.id == item.id )
            /* console.log('Item Repetido index: ', itemRepetidoIndex); */
            /* console.log('Item Repetido cant: ', itemsInCart[itemRepetidoIndex].itemCant); */
            
            /* setitemsInCart(itemsInCart[itemRepetidoIndex].itemCant = itemsInCart[itemRepetidoIndex].itemCant + itemCant ) */

            let itemsInCartCopia = [...itemsInCart]
            itemsInCartCopia[itemRepetidoIndex].itemCant += itemCant
            setItemsInCart(itemsInCartCopia)
        }
        
        console.log('Item agregado al carrito.');
        
        /* alert("Item agregado al carrito.") */
        /* () => {contarItems()} */
    
    }
    
    function contarItems () { 
        let array =  [...itemsInCart]
        let itemsTotales = 0;
        let precioTotal = 0; 
        
        /* let total = itemsInCart.map ( element => { element.itemCant += total }  ) */
        /* itemsInCart.forEach ( function (element)  {total += element.itemCant} ) */
        /* itemsInCart.map(el => el.itemCant += total ).reduce((total, val) => total + val.itemCant, 0) */
        
        console.log('array: ' , itemsInCart)
        /* itemsTotales = array.reduce((acc, el) => acc + el.itemCant, 0) */
        setTotales(array.reduce((acc, el) => acc + el.itemCant, 0))
        console.log('itemsTotales: ' , itemsTotales)
        /* precioTotal = array.reduce((acc, el) => acc + (el.precio * el.itemCant) , 0)
        console.log('precioTotal: ' , precioTotal) */
        /* setTotales(itemsTotales) */
        console.log("totales: " , totales);
        /* total = acc */
        /* cantidadItems = itemsInCart.reduce( (acc, el) => acc + el.itemCant, 0) */
        /* cantidadItems = itemsInCart.map () */
        /* setCantidadItems = total;
        console.log('cantidadItems: ' , cantidadItems); */
    }
            
    /* function addAndCount() {
        addItem ()
        contarItems ()
    } */
            
    function eliminarItem(itemId) {
        console.log("Eliminar el item: ", itemId);
    }
    
    function clearCart() {
        setitemsInCart([]);
        console.log("Se vació el carrito de compras.");
        alert("Se vació el carrito de compras.")
    }

    return (
        <CartContext.Provider value={{ addItem, contarItems, itemsInCart, eliminarItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;

