import React from "react";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";

const CartItem = ({item}) => {
    
    const { eliminarItem } = useContext(CartContext);
    
    return (
        
        
        <section className="text-gray-600 body-font">
            <div className="container px-12 mt-2 py-1 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b border-r pb-4 mb-1 border-gray-200 sm:flex-row">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-50 flex-shrink-0">
                        <img src={item.image} className="sm:w-16 sm:h-16 mw-10 mh-10"></img>
                    </div>
                    <div className="flex">
                        <div className="flex items-center  flex-grow flex-wrap sm:text-left text-center mt-6 sm:mt-0 flex-wrap block-flex  ">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{item.name}</h2>
                            <span className="flex text-gray-500 text-s font-medium">Cantidad seleccionada: {item.itemCant}</span>
                            <span className="flex text-gray-500 text-s font-medium">Precio: AR$ {item.itemCant * item.price}</span>
                            {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> 
                            </a> */}
                        </div>
                        <div className="flex items-center  ">
                            <button className="flex mx-auto h-auto mr-4 text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded-full text-md">Eliminar</button>
                        </div>
                        
                    </div>
                </div>
               
            
            </div>
        </section>
        
        
        
        
    );
};

export default CartItem;
