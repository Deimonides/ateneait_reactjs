import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBarButton = ({categId, categNombre}) => {
    return (
        <button className="mx-2 my-1 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-gradient-to-r from-blue-300 to-blue-400 hover:text-black hover:font-semibold ">
            <Link to={`/catalogo/${categId}`}>{categNombre}</Link>
        </button>
    )
}

export default CategoryBarButton