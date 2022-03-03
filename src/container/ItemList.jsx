import Item from './Item.jsx'

const ItemList = ({productos}) => {
    

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productos.map ( p => <Item key={p.id} props={p} ></Item> )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ItemList