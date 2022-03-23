import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totales, setTotales] = useState(0);   

    function addItem(item, itemCant) {
        let buscarItem = itemsInCart.find(elemento => (elemento.id === item.id) ) // buscar el item si está en el carrito
        /* let buscarItem = itemsInCart.some( elemento => elemento.id === item.id ) */ // Otra forma: devuelve True o False si encuentra el item
        /* console.log( {buscarItem} ); */
        if (buscarItem === undefined) { // el producto NO existe en el carrito
           /*  console.log('Es indefinido --> Item nuevo en carrito'); */
            const itemNuevo = { ...item, itemCant }; // generar el objeto del item incluyéndole la cantidad
            setItemsInCart([...itemsInCart, itemNuevo]); // Se agrega item nuevo
            /* console.log('array: ' , [...itemsInCart]); */
            /* setTotales(() => {contarItems()}) */
        } else {
            /* console.log('No es indefinido --> Item existe en carrito'); */ // el producto SI existe en el carrito
            let itemRepetidoIndex = itemsInCart.findIndex( elemento => elemento.id === item.id )
            /* console.log('Item Repetido index: ', itemRepetidoIndex); */
            /* console.log('Item Repetido cant: ', itemsInCart[itemRepetidoIndex].itemCant); */
            
            /* setitemsInCart(itemsInCart[itemRepetidoIndex].itemCant = itemsInCart[itemRepetidoIndex].itemCant + itemCant ) */

            let itemsInCartCopia = [...itemsInCart]
            itemsInCartCopia[itemRepetidoIndex].itemCant += itemCant
            setItemsInCart(itemsInCartCopia)
            /* setTotales(() => {contarItems()}) */
        }
        
        console.log('Item agregado al carrito.');
        /* const iTotales = contarItems(); */
        /* setTotales(() => {contarItems}) */
        /* setTotales(iTotales) */
       /*  console.log('iTotales: ' , iTotales) */
        /* console.log('totales: ' , totales) */
        
        /* alert("Item agregado al carrito.") */
        /* () => {contarItems()} */
    
    }
    
    function contarItems() { 
        let iTotales = 0;
        itemsInCart.forEach ( element => iTotales += element.itemCant );
        return iTotales;
    }
                
    function precioTotal() {            
        let pTotal = 0;
        itemsInCart.forEach ( element => pTotal += ( element.price * element.itemCant ) );
        return pTotal;           
    }                        
            
    function eliminarItem(itemId) {
        console.log("Eliminar el item: ", itemId);
    }
    
    function clearCart() {
        setItemsInCart([]);
        console.log("Se vació el carrito de compras.");
    }

    return (
        <CartContext.Provider value={{ addItem, contarItems, precioTotal, itemsInCart, eliminarItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;

