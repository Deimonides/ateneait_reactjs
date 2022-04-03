import React from "react";
import { Link } from "react-router-dom";
import BarraCategoria from "./BarraCategoria";

const NoItems = () => {
    return (
        <>
            <BarraCategoria />
            <section className="flex text-gray-600 body-font justify-center">
                <div className="px-auto py-24 mx-auto">
                    <div className="flex   -mb-10 text-center">
                        <div className="mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center object-scale-down h-full w-full"
                                    src="https://i.postimg.cc/N05ypNGx/empty-boxes-1.png"
                                />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                                No hay productos :(
                            </h2>
                            <p className="leading-relaxed text-base mb-10">
                                Disculpas! No disponemos de stock en este                                momento.
                            </p>
                            <Link to="/catalogo/todo">
                                <button className="inline-flex items-center border-0 py-1 px-3 mx-1 mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold ">
                                    Volver al catálogo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NoItems;
