import icon_carrito from '../../assets/icons/shopping-cart.png'
import CartContainer from './CartContainer';

function CartWidget() {
  return (
    
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gradient-to-r from-blue-300 to-blue-400 rounded-full text-base mt-4 md:mt-0">
        <img src={icon_carrito} alt="Carrito" className="w-5 h-5 p-0.5" />
        Mi Carrito<small className="ml-1"> (5)</small>
    </button>
   
  )
}

export default CartWidget