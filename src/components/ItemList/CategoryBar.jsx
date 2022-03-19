import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import { getCategorias } from "../firebase/firebaseClient";
/* import { Link } from 'react-router-dom' */
import CategoryBarButton from './CategoryBarButton'

const CategoryBar = () => {

    const categorias = [
        {
            'id': "todo",
            'name': "Tooodooo!"
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
    ]

    useEffect( () => {
        
        getCategorias().then( categorias => {
            console.log("getCategorias en CatBar: ", categorias);
        })
        
    }, [])
    
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <span className="mr-10">Filtrar por categoría:</span>
                        {categorias.map( (categ)  => {
                            return (
                            <CategoryBarButton
                            key={categ.id}
                            categId={categ.id} 
                            categNombre={categ.name}>
                            </CategoryBarButton>)
                            })
                        } 

                        {/* <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/todo'>Todo</Link>
                        </button>
                        <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/cpu'>Microprocesadores</Link>
                        </button>
                        <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/pvideo'>Placas de video</Link>
                        </button>
                        <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/ram'>Memorias RAM</Link>
                        </button>
                        <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/fuentes'>Fuentes</Link>
                        </button>
                        <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                            <Link to='/catalogo/monitores'>Monitores</Link>
                        </button> */}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default CategoryBar