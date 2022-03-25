import React from "react";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartItem = ({item}) => {
    
    const { eliminarItem } = useContext(CartContext);
    
    return (
        
        
        <section className="text-gray-600 body-font">
            <div className="container px-12 mt-2 py-1 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b border-r pb-4 mb-1 border-gray-200 lg:flex-row md:flex-row sm:flex-row justify-between">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-50 flex-shrink-0">
                        <img src={item.image} className="sm:w-16 sm:h-16 mw-10 mh-10"></img>
                    </div>
                    <div className="container flex-col sm:text-left  mt-6 sm:mt-0" >
                        <h2 className=  "flex text-gray-900 text-lg title-font font-medium mb-2">{item.name}</h2>
                        <span className="flex text-gray-500 text-s font-medium ">Cantidad: {item.itemCant} unidades</span>
                        <span className="flex text-gray-500 text-s font-medium ">Precio: AR$ {item.itemCant * item.price}</span>
                    </div>
                    <div className="flex items-center  flex-end">
                        <button className="flex mx-auto h-auto mr-4 text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded-full" onClick={()=>eliminarItem(item.id)}>Eliminar</button>
                    </div> 
                </div>
            </div>
        </section>
        
        
        
        
    );
};

export default CartItem;
