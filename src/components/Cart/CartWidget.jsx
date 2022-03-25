import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../Context/CartContext";
import icon_carrito from '../../assets/icons/shopping-cart.png'


function CartWidget() {
    const { contarItems, precioTotal } = useContext(CartContext);
    
    
    
    return (
        <Link to='/carrito'>
            <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded-full text-base hover:text-white mt-4 md:mt-0">
                <img src={icon_carrito} alt="Carrito" className="w-5 h-5 p-0.5 mr-2" />
            Mi Carrito
            {contarItems() > 0 && <small className="ml-1 w-5 h-5 px-1 pb-3 rounded-full bg-red-500 text-white text-justify font-bold">  {contarItems()} </small>}
            </div>
        </Link>
    )
}

export default CartWidget