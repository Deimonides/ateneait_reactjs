import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';

import Footer from'./components/Footer.jsx';

/* import img_micros from './assets/items/amd9.png'
import img_noteb from './assets/items/notebook.png'
import img_pvideo from './assets/items/gpu6800.png'
import img_celus from './assets/items/xrn9pro.png'
import img_extras from './assets/items/keymou.png' */

function App() {

  

    return (
        <div className="App">
    <div>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    <Footer anio='2022'></Footer>
    </div>
    
    </div>
    );
    {/* <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<ItemListContainer />}></Route>
                <Route path='/servicios' component={Servicios}></Route>
                <Route path='/contacto' component={Contacto}></Route>
            </Routes>
  
        </BrowserRouter>
    </> */}

}

export default App;
