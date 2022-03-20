import React from 'react'
import { useEffect, useState } from 'react'
import { getCategorias } from "../firebase/firebaseClient";
/* import { Link } from 'react-router-dom' */
import CategoryBarButton from './CategoryBarButton'

const CategoryBar = () => {

    const [categorias, setCategorias] = useState([])

    /* const categorias = [
        {
            'id': "todo",
            'name': "Todo"
        },
        {
            'id': "cpu",
            'name': "Microprocesadores"
        },
        {
            'id': "mother",
            'name': "Placas Madre"
        },
        {
            'id': "pvideo",
            'name': "Placas de video"
        },
        {
            'id': "ram",
            'name': "Memorias RAM"
        },
        {
            'id': "fuentes",
            'name': "Fuentes"
        },
        {
            'id': "monitores",
            'name': "Monitores"
        },
        {
            'id': "teclados",
            'name': "Teclados"
        }
    ] */

    useEffect( () => {
        
        getCategorias().then( categorias => {
            /* console.log("getCategorias en CatBar: ", categorias); */
            setCategorias(categorias)
        })
    
    }, [])
         
    
    
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <span className="mr-10">Filtrar por categoría:</span>
                        {categorias.map( (categ)  => {
                            /* console.log('categ: ', categ); */
                            return (
                            <CategoryBarButton
                                key={categ.id}
                                categId={categ.id} 
                                categNombre={categ.name}>
                            </CategoryBarButton>)
                            })
                        } 
                    </nav>
                </div>
            </header>
        </div>
    )
    

}

export default CategoryBar