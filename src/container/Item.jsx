const Item = ( {props} ) => {
    /* console.log(props.id); */

    /* const {props} = useParams() */
    
    return (
        <>
        
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full grayscale cursor-pointer hover:grayscale-0 hover:bg-sky-100">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt={props.name} className="object-cover object-center w-full h-full block object-scale-down" src={props.image}/>
            </a>
            <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium text-blue-600">{props.name}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"><span className="underline">Categoría</span>: {props.category}</h3>
                <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">{props.description}</h4>
                <p className="mt-1 text-red-400">$ {props.price}</p>
            </div>
        </div>
        </>
    )
}

export default Item