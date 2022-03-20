import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import ItemCount from "./ItemCount";

/* const ItemDetail = ({ id, name, type, image, description, price, stock }) => { */
const ItemDetail = ({ item }) => {
    /* console.log(item); */
    const { addItem } = useContext(CartContext);
    const { contarItems } = useContext(CartContext);

    const [isInCart, setIsInCart] = useState(false);

    function addToCart(itemCant) {
        addItem(item, itemCant);
        setIsInCart(true)
        contarItems()
    }
 
    /* console.log(isInCart); */

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt={item.id}
                            className="lg:w-1/2  h-64 object-center object-contain rounded"
                            src={item.image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {item.type}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {item.name}
                            </h1>
                            <p className="leading-relaxed">
                                {item.description}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                            <div className="flex-col">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    Precio: $ {item.price}
                                </span>
                                <p className="flex-block text-s text-gray-800">
                                    Stock disponible: {item.stock}
                                </p>
                            </div>

                            
                            {isInCart 
                            ?   <Link to='../carrito'>
                                    <button type="button" className="py-2 px-4 ml-4 mt-4 ml-60 w-40 text-sm font-medium text-gray-900 bg-green-300 rounded-full hover:bg-green-600 hover:text-white">
                                    Ir al carrito
                                    </button>     
                                </Link>
                            :   <ItemCount
                                    addToCart={addToCart}
                                    stock={item.stock}
                                />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemDetail;
