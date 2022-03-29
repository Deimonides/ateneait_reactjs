import React from "react";

const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        ¡Próximos ingresos!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        No te pierdas estas novedades, que estarán llegando en
                        pocas semanas.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* nuevo 1 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-center object-contain"
                                src="https://cdn.shopify.com/s/files/1/0498/0159/2998/products/Alienware_Area_51m_in_Lunar_Light_with_Cyberpunk_v1_Left_Side_1200x1200.png?v=1615758941"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Notebooks
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Dell Alienware Area 51M
                                </h1>
                                <p className="leading-relaxed">
                                    El COLOSO de las notebooks gamer! Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Quas, a!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* nuevo 2 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-center object-contain"
                                src="https://static.techspot.com/images/products/2019/laptops/org/2019-08-12-product.png"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Macbooks
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    MacBook Pro 16" M1 Pro 1 TB - Silver
                                </h1>
                                <p className="leading-relaxed">
                                    La potencia del ultrarrápido chip M1 Pro te
                                    permite disfrutar un rendimiento
                                    revolucionario.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* nuevo 3 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-center object-contain"
                                src="https://http2.mlstatic.com/D_NQ_NP_970541-MLA32849040267_112019-W.jpg"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Microprocesadores
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    AMD Threadripper 3990X
                                </h1>
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Temporibus, eius!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* nuevo 4 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-center object-contain"
                                src="https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/drivingforce/g920-gallery-1-1.png"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Juegos
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Logitech G29
                                </h1>
                                <p className="leading-relaxed">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga reiciendis illum eum
                                    delectus eius tenetur?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* nuevo 5 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                                src="https://i.blogs.es/e61912/pms_1631686228.46583609/original.png"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Celulares
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Xiaomi Redmi 11 Pro
                                </h1>
                                <p className="leading-relaxed">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Aperiam quis unde officiis
                                    alias recusandae ullam?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* nuevo 6 */}
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-contain object-center"
                                src="https://1.bp.blogspot.com/-38iB_3cZfIU/YUNoG-5XA-I/AAAAAAAAvRU/5wId2cudVusBdVehTRrRMyPj1y3Q4Gq2ACLcBGAsYHQ/s1384/Xiaomi%2BPad%2B5%2B_%2BPen%2B4.png"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                    Tablets
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Xiaomi Pad 5
                                </h1>
                                <p className="leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Aliquam eius magnam
                                    voluptate assumenda a, tempora qui!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
