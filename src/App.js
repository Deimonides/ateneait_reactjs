import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Footer from'./components/Footer.jsx';

import img_micros from './assets/items/amd9.png'
import img_noteb from './assets/items/notebook.png'
import img_pvideo from './assets/items/gpu6800.png'
import img_celus from './assets/items/xrn9pro.png'
import img_extras from './assets/items/keymou.png'

function App() {

  

  return (
    <div className="App">
      <div>
        <NavBar />
        <ItemListContainer greeting="ItemListContainer: Microprocesadores" imagen={img_micros} categ="Microprocesadores" />
        <ItemListContainer greeting="ItemListContainer: Notebooks" imagen={img_noteb} categ="Notebooks" />
        <ItemListContainer greeting="ItemListContainer: Placas de video" imagen={img_pvideo} categ="Placas de Video" />
        <ItemListContainer greeting="ItemListContainer: Celulares" imagen={img_celus} categ="Celulares" />
        <ItemListContainer greeting="ItemListContainer: Accesorios" imagen={img_extras} categ="Accesorios" />
        <Footer anio='2022'></Footer>
      </div>

    </div>
  );
}

export default App;
