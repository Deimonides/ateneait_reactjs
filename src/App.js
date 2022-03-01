import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
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
        <Footer anio='2022'></Footer>
      </div>

    </div>
  );
}

export default App;
