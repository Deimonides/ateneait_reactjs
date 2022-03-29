import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../Context/CartContext";
import { grabarCompra } from "../firebase/firebaseClient";
import { armarCompra } from "./Pago"

const PagoForm = () => {
    

    const [cliente, setCliente] = useState({
        nombre:     "",
        apellido:   "",
        mail:       "",
        celular:    "",
        direccion:  "",
        depto:      "",
        cp:         "",
        provincia:  ""
    });

    function handleInput(event) {
        const target = event.target;
        const value = target.value;
        const nameInput = target.name;

        setCliente({ ...cliente , [nameInput]: value });
    }
    
 /*    const enviarCompra = () => {
    
        const compra = {
            cliente: {
                nombre: "Gerardo",
                apellido: "Solotun"
            }, 
            productos: [...productosCompra],
            total: precioTotal()
        }
        
        console.log(compra);
        generarCompra(compra).then
        console.log("Compra realizada!");
    }
 */
    

    return (
        <>
            <div>
                <div className="py-12 flex justify-center">
                    <div className="max-w-md mx-auto  md:max-w-xl mx-2">
                        {" "}
                        {/* bg-white shadow-lg rounded-lg */}
                        <form className="md:flex  ">
                            <div className="w-full p-4 px-5 py-5">
                                <div className="flex flex-row mb-6">
                                    <h2 className="text-3xl font-semibold">
                                        Formulario de pago y envío
                                    </h2>
                                </div>
                                <div className="mb-6">
                                    <span>Datos personales</span>
                                    <div className="grid md:grid-cols-2 md:gap-2">
                                        <input
                                            type="text"
                                            name="nombre"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            value={cliente.nombre}
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Nombre*"
                                        />
                                        <input
                                            type="text"
                                            name="apellido"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            value={cliente.apellido}
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Apellido*"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-3 md:gap-2">
                                        <input
                                            type="text"
                                            name="mail"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            value={cliente.mail}
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm col-start-1 col-end-3"
                                            placeholder="E-mail*"
                                        />
                                        <input
                                            type="text"
                                            name="celular"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            value={cliente.celular}
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm "
                                            placeholder="Celular*"
                                        />
                                    </div>
                                    {/* <span className="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span> */}
                                </div>

                                <div className="mb-6">
                                    <span>Dirección de envío</span>
                                    {/* <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" />  */}
                                    <input
                                        type="text"
                                        name="direccion"
                                        onChange={(event) =>
                                            handleInput(event)
                                        }
                                        className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        placeholder="Calle y Número*"
                                    />
                                    {/* <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" /> */}
                                    <div className="grid md:grid-cols-2 md:gap-2">
                                        <input
                                            type="text"
                                            name="depto"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Piso y Departamento*"
                                        />
                                        <input
                                            type="text"
                                            name="cp"
                                            onChange={(event) =>
                                                handleInput(event)
                                            }
                                            className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                            placeholder="Código Postal*"
                                        />
                                    </div>
                                    {/* <div className="grid md:grid-cols-3 md:gap-2"> 
                                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" /> 
                                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" /> 
                                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" /> 
                                    </div> */}

                                    <input
                                        type="text"
                                        name="provincia"
                                        onChange={(event) =>
                                            handleInput(event)
                                        }
                                        className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                                        placeholder="Provincia*"
                                    />
                                    {/* <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" /> */}
                                </div>

                                {/* <form>
                                    <div className="grid md:grid-cols-3 md:gap-2"> 
                                        <select className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" >
                                            <option value="Visa">Visa</option>
                                            <option value="Amercican Express">Amercican Express</option>
                                            <option value="Mastercard">Mastercard</option>
                                        </select>
                                        <select className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" >
                                            <option value="1cuotas">1 cuota</option>
                                            <option value="3cuotas">3 cuotas</option>
                                            <option value="6cuotas">6 cuotas</option>
                                            <option value="12cuotas">12 cuotas</option>
                                            
                                        </select>
                                        {/* <input type="combo" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" />  */}
                                {/* <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" /> 
                                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" /> 
                                    </div> */}

                                {/* </div> */}

                                <div className="flex justify-end mb-6">
                                    <h4 className="text-gray-900 title-font text-lg font-medium text-blue-600">
                                        Total a pagar: AR$ {precioTotal()}
                                    </h4>
                                </div>

                                <div className="text-gray-600 body-font flex justify-between items-center pt-2">
                                    <Link to="../carrito">
                                        <button
                                            type="button"
                                            className="py-1 px-6 rounded-full text-lg inline-flex items-center border-0  px-3 mt-10 bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold"
                                        >
                                            Volver
                                        </button>
                                    </Link>
                                    <Link to="../catalogo/todo">
                                        <button
                                            type="button"
                                            className="py-1 px-6 rounded-full text-lg inline-flex items-center border-0  px-3 mt-10 bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold"
                                        >
                                            Seguir comprando
                                        </button>
                                    </Link>
                                    <button
                                        /* type="submit" */ type="button"
                                        value="Submit"
                                        className="py-1 px-6 rounded-full text-lg inline-flex items-center border-0  px-3 mt-10 bg-gradient-to-r from-blue-300 to-blue-100 hover:from-blue-400 hover:to-blue-800 hover:text-white rounded-full text-base md:mt-0  text-lg font-bold"
                                        onClick={() => { armarCompra(cliente) }}
                                    >
                                        Finalizar compra
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PagoForm;
