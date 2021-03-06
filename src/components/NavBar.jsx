import logot_ateneait from '../assets/logo/logotipo-bk.png'
import icon_cuenta from '../assets/icons/account.png'
import CartWidget from './Cart/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
    
    function miUsuario() {
        return alert("Ya estás logueado en el sitio!")
    }
    
    return (
        <header className="text-gray-600 body-font w-full sticky top-0 bg-gradient-to-r from-blue-200 to-blue-100 flex-nowrap z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               
                {/* /// Logo de empresa \\\ */}
                <Link to='/'className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logot_ateneait} alt="Logo AteneaIT" className="h-8 text-white p-0.5" />
                </Link>
             
                {/* /// Accesos \\\ */}
                <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg font-bold justify-center">
                    <Link to='/'             className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base mt-4 md:mt-0">Inicio</Link>
                    <Link to='catalogo/todo' className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base mt-4 md:mt-0">Catalogo</Link>
                    <Link to='contacto'      className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base mt-4 md:mt-0">Contacto</Link>
                </div>

                {/* /// Boton MI CUENTA \\\ */}
                <button onClick={miUsuario} className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-lg font-bold text-base mt-4 md:mt-0">
                    <img src={icon_cuenta} alt="Cuenta" className="w-5 h-5 p-0.5 mr-2 bg-white border-2 rounded-full border-white" />
                    Cuenta
                </button>
                
                {/* /// Boton MI CARRITO \\\ */}
                <Link to='carrito' >
                    {<CartWidget />}
                </Link>
            </div>
        </header>
    )
}

export default NavBar