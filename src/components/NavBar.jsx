
import isot_ateneait from '../assets/logo/isotipo.ico'
import logot_ateneait from '../assets/logo/logotipo-bk.png'

import icon_cuenta from '../assets/icons/account.png'
import icon_carrito from '../assets/icons/shopping-cart.png'
import CartWidget from './CartWidget'

function NavBar() {

    const msgAlerta = (texto) => { alert(texto) }

    return (
        <header class="text-gray-600 body-font w-full sticky top-0 bg-gradient-to-r from-blue-200 to-blue-100 flex-nowrap z-50">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
               

                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <img src={isot_ateneait} alt="Logo AteneaIT" class="w-10 h-10 text-white p-0.5 bg-blue-700 rounded-full" /> */}
                    <img src={logot_ateneait} alt="Logo AteneaIT" class="h-8 text-white p-0.5" />
                    
                    {/* <span class="ml-3 text-xl">Atenea IT</span> */}
                </a>
             

                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a href="#" class="mr-5 hover:text-blue-500 hover:font-bold">Productos</a>
                <a href="#" class="mr-5 hover:text-blue-500 hover:font-bold">Promociones</a>
                <a href="#" class="mr-5 hover:text-blue-500 hover:font-bold">Servicios</a>
                <a href="#" class="mr-5 hover:text-blue-500 hover:font-bold" href="mailto:soporte_ateneait@gmail.com?subject=Quiero%20mas%20info!">Contacto</a>
                </nav>

                {/* Boton MI CUENTA */}
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded text-base mt-4 md:mt-0">
                    <img src={icon_cuenta} alt="Cuenta" class="w-5 h-5 p-0.5" />
                    Mi Cuenta
                </button>
                
                {/* Boton MI CARRITO */}
                <CartWidget>
                    <p>Algo...</p>
                </CartWidget>
       
            </div>
        </header>
    )
}

export default NavBar








