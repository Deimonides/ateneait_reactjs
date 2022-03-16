import React from "react";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from 'react-router-dom'

const CartList = () => {

    const { clearCart } = useContext(CartContext);

    return (
        <section className="text-gray-600 body-font">
        <div>
            <h3>Cantidad de Items: ##</h3>
            <h3>Detalle de los items</h3>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center shadow-lg">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/3 mb-10 md:mb-0">
            <img
                className="object-scale-down object-center rounded"
                alt="hero"
                src="https://vkvstore.com.ar/wp-content/uploads/2017/06/D_NQ_NP_850169-MLA40193742738_122019-V.jpg"
            />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h4 className="title-font sm:text-4l text-3xl mb-4 font-medium text-gray-900">
                Nombre de item en carrito
            </h4>
            <h2 className="mb-8 leading-relaxed">
                Cantidad: XX ---- [Boton Eliminar Item]
            </h2>
            <div className="flex-wrap justify-center">
                <Link to="../pago">
                    <button className="mr-4 mb-2 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg">
                    Pagar el carrito
                    </button>
                </Link>
                <button className="mr-4 mb-2 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg"
                onClick={ clearCart }>
                Vaciar carrito
                </button>
                <Link to='../catalogo/todo'>
                <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded-full text-lg">
                Seguir comprando
                </button>
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
};

export default CartList;
