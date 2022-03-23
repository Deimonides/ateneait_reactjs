import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Footer from'./components/Footer.jsx';

import Home from './components/Pages/Home';
import ItemListContainer from './components/ItemList/ItemListContainer2';
import { CartContextProvider } from './components/Context/CartContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Servicios from './components/Pages/Servicios';
import Contacto from './components/Pages/Contacto';
import Cart from './components/Cart/Cart';
import PagoContainer from './components/Pago/PagoContainer';



function App() {

    return (
        <>
            <CartContextProvider> 
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path='catalogo/:categoryID' element={<ItemListContainer />}></Route>
                        <Route path='producto/:id' element={<ItemDetailContainer />}></Route>
                        <Route path='servicios' element={<Servicios />}></Route>
                        <Route path='contacto' element={<Contacto />}></Route>
                        <Route path='carrito' element={<Cart />}></Route>
                        <Route path='pago' element={<PagoContainer />}></Route>
                    </Routes>
                    <Footer anio='2022'></Footer>
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App;
