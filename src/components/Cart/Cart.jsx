import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const Cart = () => {
    const {
        itemsInCart,
        contarItems,
        precioTotal,
        vaciarCarrito,
        eliminarItem,
    } = useContext(CartContext);

    if (itemsInCart.length === 0) {
        console.log("Carrito VACIO.");
        return (
            <div className="flex-auto justify-center mx-auto">
                <h2 className="flex justify-center flex-auto mt-4 text-2xl">
                    No hay productos en su carrito, pero...
                </h2>
                <img alt="dinero" src="dinero.png" className="mx-auto mt-10" />
                <Link to="../catalogo/todo">
                    <div className="flex justify-center mt-10">
                        <button className="flex justify-center text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded-full text-lg">
                            Ir al catálogo
                        </button>
                    </div>
                </Link>
            </div>
        );
    } else {
        console.log("Carrito con items.");
        return (
            <div>
                {/* <h3>Detalle de los items</h3> */}
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
                        <button className="mr-4 mb-2 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full   text-lg">
                            Pagar el carrito
                        </button>
                    </Link>
                    <button
                        className="mr-4 mb-2 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg"
                        onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                    <Link to="../catalogo/todo">
                        <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded-full text-lg">
                            Seguir comprando
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
};
export default Cart;
