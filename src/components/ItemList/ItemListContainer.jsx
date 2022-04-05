import { getProductos } from "../firebase/firebaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import NoItems from "./NoItems";
import LoadingScreen from "./LoadingScreen";

function ItemListContainer() {
    const [ productos, setProductos ] = useState([]);
    const [ consultado, setConsultado ] = useState(false);
    const { categoryID } = useParams();

    useEffect(() => {
        setConsultado(false);
        getProductos().then((prods) => {
            /* console.log("getProductos en ILC2: ", prods); */
            if (categoryID === "todo") {
                /* console.log('categoryID True', categoryID); */
                // Mapear todo => Mostrar todos los productos
                setProductos(prods);
                setConsultado(true);
            } else {
                /* console.log('categoryID False', categoryID); */
                const arrayCateg = prods.filter((item) => {
                    return item.category.toLowerCase() === categoryID; // Filtrar los productos que coincidan con la categoria
                });
                /* console.log( '@ItemListContainer@ arrayCateg', arrayCateg ); */
                setConsultado(true);
                setProductos(arrayCateg);
            }
        });
        /* console.log("Render categoryID: ", categoryID); */
    }, [categoryID]);

    return (
        <div>
            { productos.length > 0 
                ? <ItemList propsILC={productos}></ItemList> // Se consultó la base & la categoria SI tiene productos
                : [ consultado
                    ?<NoItems /> // Se consultó la base & la categoria NO tiene productos
                    :<LoadingScreen /> // NO se consultó la base (se está consultando)
                ]
            }
        </div>
    );
}

export default ItemListContainer;
