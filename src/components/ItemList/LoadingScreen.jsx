import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="flex-wrap container justify-center mx-auto">
            <h2 className="flex-block text-center mx-auto my-10 title-font text-2xl font-medium text-gray-900" >Cargando productos...</h2>
            <img className="flex  mx-auto" src={require('../../assets/loading.gif')} alt="Loading..." />
        </div>
    )
}

export default LoadingScreen