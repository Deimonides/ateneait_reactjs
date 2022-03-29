import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const Cart = () => {
    const { itemsInCart,contarItems,precioTotal,vaciarCarrito } = useContext(CartContext);

    if (itemsInCart.length === 0) {
        /* console.log("Carrito VACIO."); */
        return (
            <div className="flex-auto justify-center mx-auto">
                <h2 className="flex justify-center flex-auto mt-4 text-2xl">
                    No hay productos en su carrito, pero...
                </h2>
                <img alt="dinero" src="dinero.png" className="mx-auto mt-10" />
                <Link to="../catalogo/todo">
                    <div className="flex justify-center mt-10">
                        <button className="inline-flex items-center border-0 py-1 px-3 mx-1 mt-10 focus:outline-none bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold ">
                            Ir al catálogo
                        </button>
                    </div>
                </Link>
            </div>
        );
    } else {
        /* console.log("Carrito con items."); */
        return (
            <div>
                {/* Detalle de cada producto agregado */}
                <div>
                    {itemsInCart.map((item) => {
                        return <CartItem key={item.id} item={item}></CartItem>;
                    })}
                </div>

                {/* Totalizados */}
                <div className="flex flex-col flex-auto ">
                    <h3 className="flex justify-center text-blue-700 text-s font-medium">
                        Productos en el carrito: {contarItems()}
                    </h3>
                    <h3 className="flex justify-center text-blue-700 text-s font-medium">
                        Precio total del carrito: AR$ {precioTotal()}
                    </h3>
                </div>

                {/* Botones */}
                <div className=" flex flex-wrap justify-center mt-6 mb-20">
                    <Link to="../pago">
                        <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                            Pagar el carrito
                        </button>
                    </Link>
                    <button onClick={vaciarCarrito} className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                        Vaciar carrito
                    </button>
                    <Link to="../catalogo/todo">
                        <button className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                            Seguir comprando
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default Cart;