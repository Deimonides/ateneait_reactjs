import React, { useState } from "react";

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(1);
    
    function sumarItem () {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function restarItem () {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    // agregar Context: video after 00:16:14
    
    return (
        <>
            <div className="justify-items-end">
    
            <h4 className="inline-flex mt-5 mr-2">Cantidad:</h4>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={restarItem}
                  type="button"
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-blue-100 rounded-l-md border border-gray-900
                  hover:bg-blue-600 hover:text-white"/*  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white" */
                  >
                  - 1
                </button>
                <label
                  type="label"
                  className="py-2 px-4 mx-0.5 text-sm font-medium text-gray-900 bg-transparent border-t  border border-gray-900 "
                  >
                  {count}
                </label>
                <button
                  onClick={sumarItem}
                  type="button"
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-blue-100 border-t  rounded-r-md border border-gray-900 
                  hover:bg-blue-600 hover:text-white"/*  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white" */
                  >
                  + 1
                </button>
                <button
                  type="button"
                  className="py-2 px-4 ml-4 text-sm font-medium text-gray-900 bg-blue-300 rounded-l-md rounded-r-md border border-gray-900 
                  hover:bg-blue-600 hover:text-white"/*  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-600 focus:text-white" */
                  >
                  Agregar al carrito
                </button>
            </div>
                    </div>
        </>
    );
};

