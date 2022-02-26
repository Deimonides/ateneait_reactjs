const Item = ( {props} ) => {
    /* console.log(props.name); */
    return (
        <>
        
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full grayscale cursor-pointer hover:grayscale-0 hover:bg-sky-100">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block object-scale-down" src={props.image}/>
            </a>
            <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium text-blue-600">{props.title}</h2>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 h-12 overflow-hidden hover:h-max"><span className="underline">Descripción</span>: {props.description}</h3>
            {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Descripción: {props.description}</h3> */}
            <p className="mt-1 text-red-400">U$S {props.price}</p>
            
            {/* Rick & Morty !!! */}
            {/* <h2 className="text-gray-900 title-font text-lg font-medium text-blue-600">{props.name}</h2> */}
            {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Especie: {props.species}</h3>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Estado: {props.status}</h3>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Origen: {props.origin.name}</h3> */}
            </div>
        </div>
        </>
    )
}

export default Item