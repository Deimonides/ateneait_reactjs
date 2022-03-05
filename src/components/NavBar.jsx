
import isot_ateneait from '../assets/logo/isotipo.ico'
import logot_ateneait from '../assets/logo/logotipo-bk.png'

import icon_cuenta from '../assets/icons/account.png'
import icon_carrito from '../assets/icons/shopping-cart.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {

    const msgAlerta = (texto) => { alert(texto) }
    
    
    
    
    
    return (
        <header className="text-gray-600 body-font w-full sticky top-0 bg-gradient-to-r from-blue-200 to-blue-100 flex-nowrap z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               
                {/* /// Logo de empresa \\\ */}
                <Link to='/'className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <img src={isot_ateneait} alt="Logo AteneaIT" className="w-10 h-10 text-white p-0.5 bg-blue-700 rounded-full" /> */}
                    <img src={logot_ateneait} alt="Logo AteneaIT" className="h-8 text-white p-0.5" />
                    
                    {/* <span className="ml-3 text-xl">Atenea IT</span> */}
                </Link>
             
                {/* /// Logo de empresa \\\ */}
                <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg font-bold justify-center">
                    {/* <a href="#" className="mr-5 hover:text-blue-500 hover:font-bold">Productos</a>
                    <a href="#" className="mr-5 hover:text-blue-500 hover:font-bold">Servicios</a>
                    <a href="#" className="mr-5 hover:text-blue-500 hover:font-bold" href="mailto:soporte_ateneait@gmail.com?subject=Quiero%20mas%20info!">Contacto</a> */}
                    {/* <Link to='servicios' className="mr-5 hover:text-blue-500 hover:font-bold">Servicios</Link> */}
                    <Link to='/' className="mr-5 hover:text-blue-500">Inicio</Link>
                    <Link to='catalogo/todo' className="mr-5 hover:text-blue-500">Catalogo</Link>
                    <Link to='contacto' className="mr-5 hover:text-blue-500">Contacto</Link>
                </div>

                {/* /// Boton MI CUENTA \\\ */}
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded text-base mt-4 md:mt-0">
                    <img src={icon_cuenta} alt="Cuenta" className="w-5 h-5 p-0.5" />
                    Mi Cuenta
                </button>
                
                {/* /// Boton MI CARRITO \\\ */}
                <CartWidget>
                    <p>Algo...</p>
                </CartWidget>
       
            </div>
        </header>
    )
}

export default NavBar








