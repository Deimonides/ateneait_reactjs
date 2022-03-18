import React from 'react'
import { Link } from 'react-router-dom';
import icon_carrito from '../../assets/icons/shopping-cart.png'

function CartWidget() {
    return (
        <Link to='/carrito'>
            <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded-full text-base hover:text-white mt-4 md:mt-0">
                <img src={icon_carrito} alt="Carrito" className="w-5 h-5 p-0.5 mr-2" />
            Mi Carrito<small className="ml-1"> (5)</small>
            </div>
        </Link>
    )
}

export default CartWidget