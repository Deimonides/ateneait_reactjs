import icon_carrito from '../assets/icons/shopping-cart.png'

function CartWidget() {
  return (
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded text-base mt-4 md:mt-0">
        <img src={icon_carrito} alt="Cuenta" class="w-5 h-5 p-0.5" />
        Mi Carrito<small class="ml-1"> (2)</small>
    </button>
  )
}

export default CartWidget