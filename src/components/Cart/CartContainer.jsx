import React from 'react'

import CartList from './CartList'
import CartContext from "../Context/CartContext";
import { useContext } from "react";


const CartContainer = () => {
    
    /* const { itemsInCart, eliminarItem } = useContext(CartContext); */
    
    /* let items = itemsInCart.map */
    
    return(
    /* {items.length == 0
    ?  (console.log("No hay Items") )
    :  (<CartList />)
    } */
    <> {/* PROVISORIO */}
    <div className='flex-auto justify-center mx-auto'>
        <h2 className='flex justify-center flex-auto mt-4 text-2xl'>Carrito.....</h2>
        <img alt='dinero' src='dinero.png' className='mx-auto mt-10'/>
    </div>
    </> /* PROVISORIO */
    )
}

export default CartContainer