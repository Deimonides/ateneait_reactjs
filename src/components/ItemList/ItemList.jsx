import BarraCategoria from './BarraCategoria'
import Item from './Item.jsx'

const ItemList = ({propsILC}) => {
     
    return (
        <>
            <BarraCategoria />
            <section className="text-gray-600 body-font justify-center text-center ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {propsILC.map ( (item) => {
                            return <Item key={item.id} item={item} /> 
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ItemList