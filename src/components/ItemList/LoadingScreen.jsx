import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="flex-wrap container justify-center mx-auto">
            <h2 className="flex-block text-center mx-auto my-10 font-bold text-lg text-gray-600" >Cargando productos...</h2>
            <img className="flex  mx-auto" src={require('../../assets/loading.gif')} alt="Loading..." />
        </div>
    )
}

export default LoadingScreen