import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBarButton = ({categId, categNombre}) => {
    return (
        <button className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:to-blue-800 hover:text-white rounded-full text-base mt-4 md:mt-0 text-lg font-bold mb-2">
            <Link to={`/catalogo/${categId}`}>{categNombre}</Link>
        </button>
    )
}

export default CategoryBarButton