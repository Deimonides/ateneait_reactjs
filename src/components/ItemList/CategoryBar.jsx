import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <span className="mr-10">Filtrar por categoría:</span>
                    <button className="mx-2 my-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
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
                </nav>
            </div>
        </header>
    </div>
  )
}

export default CategoryBar