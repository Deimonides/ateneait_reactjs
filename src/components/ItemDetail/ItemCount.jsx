import React, { useState } from "react";
import { useContext } from "react";

export default function ItemCount({ stock, addToCart }) {
    const [count, setCount] = useState(1);

    function sumarItem() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function restarItem() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="justify-items-end">
                <h4 className="inline-flex mt-5 mr-2">Cantidad:</h4>
                <div className="inline-flex rounded-md" role="group">
                    <button
                        onClick={restarItem}
                        type="button"
                        className="w-15 py-1 px-5 inline-flex items-center border-0 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-l-full text-base mt-4 md:mt-0 text-lg font-bold"
                    >
                        - 1
                    </button>
                    <label
                        type="label"
                        className="py-1 px-5 w-12 mx-0.5 items-center text-sm font-medium text-gray-900 bg-transparent text-lg font-bold"
                    >
                        {count}
                    </label>
                    <button
                        onClick={sumarItem}
                        type="button"
                        className="w-15 py-1 px-5 inline-flex items-center border-0  px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-r-full text-base mt-4 md:mt-0 text-lg font-bold"
                    >
                        + 1
                    </button>
                </div>
                <div className="inline-flex rounded-md mx-4 mt-4 md:mx-1" role="group">
                    <button
                        onClick={() => addToCart(count)}
                        type="button"
                        className="inline-flex items-center border-0  py-1 px-3 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}
