import React, { useState } from "react";

export default function Itemcontador({ stock, addToCart }) {
    const [contador, setContador] = useState(1);

    function sumarItem() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    function restarItem() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="justify-items-start">
                <h4 className="inline-flex mr-2">Cantidad:</h4>
                <div className="inline-flex rounded-md content-center" role="group">
                    <button
                        onClick={restarItem}
                        type="button"
                        className="w-15 py-1 px-5 inline-flex border-0 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-l-full text-base mt-4 md:mt-0 text-lg font-bold">
                        - 1
                    </button>
                    <label
                        type="label"
                        className="w-15 py-1 px-3 inline-flex border-0 px-3 mx-1 focus:outline-none bg-transparent text-base mt-4 md:mt-0 text-lg font-bold">
                        {contador}
                    </label>
                    <button
                        onClick={sumarItem}
                        type="button"
                        className="w-15 py-1 px-5 inline-flex border-0  px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-r-full text-base mt-4 md:mt-0 text-lg font-bold">
                        + 1
                    </button>
                </div>
                <div className="inline-flex rounded-md mx-4 mt-4 md:mx-1" role="group">
                    <button
                        onClick={() => addToCart(contador)}
                        type="button"
                        className="inline-flex items-center border-0  py-1 px-3 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}
