import React, { useState } from "react";

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
                        className="py-2 px-5 text-sm font-medium text-gray-900 bg-blue-100 rounded-l-full 
                        hover:bg-blue-600 hover:text-white" >
                        - 1
                    </button>
                    <label
                        type="label"
                        className="py-2 px-5 w-12 mx-0.5 text-sm font-medium text-gray-900 bg-transparent" >
                        {count}
                    </label>
                    <button
                        onClick={sumarItem}
                        type="button"
                        className="py-2 px-5 text-sm font-medium text-gray-900 bg-blue-100 rounded-r-full 
                        hover:bg-blue-600 hover:text-white" >
                        + 1
                    </button>
                    <button
                        type="button"
                        className="py-2 px-4 ml-4 text-sm font-medium text-gray-900 bg-blue-300 rounded-full 
                        hover:bg-blue-600 hover:text-white"
                        /* onClick={ () => addToCart(count) } > */
                        onClick={ () => addToCart(count) } >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    );
}
