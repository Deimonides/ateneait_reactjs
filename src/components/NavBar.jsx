import logo_ateneait from '../assets/logo/ateneait.ico'
import icon_cuenta from '../assets/icons/account.png'
import icon_carrito from '../assets/icons/shopping-cart.png'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header class="text-gray-600 body-font w-full sticky top-0 bg-gradient-to-r from-blue-200 to-blue-100 flex-nowrap">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               

                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo_ateneait} alt="Logo AteneaIT" class="w-10 h-10 text-white p-0.5 bg-blue-700 rounded-full" />
                    <span class="ml-3 text-xl">Atenea IT</span>
                </a>
             

                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-blue-500">Productos</a>
                <a class="mr-5 hover:text-blue-900">Promociones</a>
                <a class="mr-5 hover:text-blue-900">Servicios</a>
                <a class="mr-5 hover:text-blue-900" href="mailto:soporte_ateneait@gmail.com?subject=Quiero%20mas%20info!">Contacto</a>
                </nav>
           
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded text-base mt-4 md:mt-0">
                    <img src={icon_cuenta} alt="Cuenta" class="w-5 h-5 p-0.5" />
                    Mi Cuenta
                </button>
                    <CartWidget />
       
            </div>
        </header>
    )
}

export default NavBar








