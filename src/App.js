import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Footer from'./components/Footer.jsx';

import Home from './container/Home';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';



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
