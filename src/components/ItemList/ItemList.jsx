import CategoryBar from './CategoryBar.jsx'
import Item from './Item.jsx'

const ItemList = ({propsILC}) => {
    
    return (
        <>
            <CategoryBar />
            <section className="text-gray-600 body-font justify-center text-center ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {propsILC.map ( (item) => {
                            return <Item item={item}
                                key={item.id} 
                                /* id={item.id} 
                                name={item.name} 
                                type={item.type} 
                                image={item.image} 
                                description={item.description} 
                                price={item.price} 
                                stock={item.stock} */ 
                            /> 
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ItemList