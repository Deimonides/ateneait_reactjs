import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10  text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link> */}
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
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    </div>
  )
}

export default CategoryBar