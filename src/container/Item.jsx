import { Link } from 'react-router-dom';

/* const Item = ( {propsIL} ) => { */
const Item = ( { id, name, type, image, description, price, stock } ) => {

    /* console.log(propsIL.id); */

    /* const {propsIL} = useParams() */
    /* const {itemID} = useParams() */
    /* console.log('@Item.jsx: id =', id, typeof(id)); */
    
    return (
        <>
        {/* <p className="text-xs">Estamos en: <strong>Item</strong></p> */}
        {/* <div className="lg:w-1/4 md:w-1/2 p-4 mx-auto w-full grayscale hover:grayscale-0 hover:bg-sky-100"> */}
        <Link to={`/producto/${id}`} className="lg:w-1/4 md:w-1/2 p-4 mx-auto w-full grayscale hover:grayscale-0 hover:bg-sky-100">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt={name} className="object-cover object-center w-full h-full block object-scale-down" src={image}/>
            </a>
            <div className="mt-4 justify-center">
                <h2 className="text-gray-900 title-font text-lg font-medium text-blue-600">{name}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"><span className="underline">Categoría</span>: {type}</h3>
                {/* <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">{description}</h4> */}
                <p className="mt-1 text-red-400">$ {price}</p>
            </div>
        </Link>
        </>
    )
}

export default Item