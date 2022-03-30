import { useState } from "react";

function Contacto() {

    const [ contacto , setContacto ] = useState(false);
           /*  console.log(contacto);     */        

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        className="absolute inset-0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3046.437058042634!2d-58.38323398304605!3d-34.6040340076737!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1646367618731!5m2!1ses-419!2sar"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-4 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-bold text-blue-900 tracking-widest text-xs">
                                ATENEA IT S.R.L.
                            </h2>
                            <p className="mt-1">
                                Obelisco de Buenos Aires, Último Piso - Oficina
                                "2"
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                Email
                            </h2>
                            <a
                                href="mailto:gsolotun@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-indigo-500 leading-relaxed"
                            >
                                info@ateneait.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                WhatsApp
                            </h2>
                            <a
                                href="https://api.whatsapp.com/send/?phone=5491126138166"
                                target="_blank"
                                rel="noreferrer"
                                className="text-green-500 leading-relaxed"
                            >
                                +54 9 11 2613 8166
                            </a>
                        </div>
                    </div>
                </div>
                
                {contacto 
                ?
                    <div className="llg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center">Su consulta ha sido enviada!</div>
                :
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Contáctenos
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Complete el formulario y le estaremos respondiendo a la brevedad.
                        </p>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Nombre*"
                                />
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Email*"
                                />
                        </div>
                        <div className="relative mb-4">
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                placeholder="Mensaje*"
                                ></textarea>
                        </div>
                        <button onClick={() => {setContacto(true)}} className=" border-0  px-5 py-1 mx-auto mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                            Enviar consulta
                        </button>
                    </div>
            }

            </div>
        
        </section>
    );
}

export default Contacto;
