import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Footer from'./components/Footer.jsx';

import Home from './components/Pages/Home';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Servicios from './components/Pages/Servicios';
import Contacto from './components/Pages/Contacto';



function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path='catalogo/:categoryID' element={<ItemListContainer />}></Route>
                    <Route path='producto/:id' element={<ItemDetailContainer />}></Route>
                    <Route path='servicios' element={<Servicios />}></Route>
                    <Route path='contacto' element={<Contacto />}></Route>
                </Routes>
                <Footer anio='2022'></Footer>
            </BrowserRouter>
        </>
    )
}

export default App;
