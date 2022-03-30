import { Link } from 'react-router-dom';

/* const Item = ( { id, name, type, image, description, price, stock } ) => { */
const Item = ( { item } ) => {
    
    return ( 
        <>
        {/* <Link to={`/producto/${item.id}`} className="lg:w-1/4 md:w-1/2 p-4 mx-auto w-full grayscale hover:grayscale-0 hover:bg-sky-100"> */}
        <Link to={`/producto/${item.id}`} className="lg:w-1/4 md:w-1/2 p-4 mx-auto my-4 w-full hover:scale-125 ease-in duration-300"> 
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt={item.name} className="object-cover object-center w-full h-full block object-scale-down " src={item.image}/>
            </div>
            {/* <iframe src={item.image}/> */}
            <div className="mt-4 justify-center">
                <h2 className="text-gray-900 title-font text-lg font-medium text-blue-600">{item.name}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"><span className="underline">Categoría</span>: {item.type}</h3>
                {/* <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1">{description}</h4> */}
                <p className="mt-1 text-lg font-medium text-blue-400">$ {item.price}</p>
            </div>
        </Link>
        </>
    )
}
 
export default Item