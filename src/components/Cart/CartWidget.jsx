import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../Context/CartContext";
import icon_carrito from '../../assets/icons/shopping-cart.png'

function CartWidget() {
    const { contarItems } = useContext(CartContext);
    
    return (
        <Link to='/carrito'>
            <div className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base mt-4 md:mt-0 text-lg font-bold">
                <img src={icon_carrito} alt="Carrito" className="w-5 h-5 p-0.5 mr-2 bg-white border-2 rounded-full border-white" />
            Mi Carrito
            {contarItems() > 0 && <small className="animate-pulse  ml-1 w-5 h-5 px-1 pb-3 rounded-full bg-red-500 text-white text-justify font-bold"> {contarItems()} </small>}
            </div>
        </Link>
    )
}

export default CartWidget