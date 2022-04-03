import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([]);

    function addItem(item, itemCant) {
        let buscarItem = itemsInCart.find(elemento => (elemento.id === item.id) ) // buscar el item si está en el carrito
        if (buscarItem === undefined) { // el producto NO existe en el carrito
           /*  console.log('Es indefinido --> Item nuevo en carrito'); */
            const itemNuevo = { ...item, itemCant }; // generar el objeto del item incluyéndole la cantidad
            setItemsInCart([...itemsInCart, itemNuevo]); // Se agrega item nuevo
        } else {
            /* console.log('No es indefinido --> Item existe en carrito'); */ // el producto SI existe en el carrito
            let itemRepetidoIndex = itemsInCart.findIndex( elemento => elemento.id === item.id )
            let itemsInCartCopia = [...itemsInCart]
            itemsInCartCopia[itemRepetidoIndex].itemCant += itemCant
            setItemsInCart(itemsInCartCopia)
        }
        console.log('Item agregado al carrito.');
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
            
    function eliminarItem(id) {
        setItemsInCart(itemsInCart.filter( elemento => elemento.id !== id ) )
    }
    
    function vaciarCarrito() {
        setItemsInCart([]);
        console.log("Se vació el carrito de compras.");
    }

    return (
        <CartContext.Provider value={{ addItem, contarItems, precioTotal, itemsInCart, eliminarItem, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;

