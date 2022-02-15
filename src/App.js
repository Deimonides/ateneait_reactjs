import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Footer from'./components/Footer.jsx';

function App() {

  const mensajeBienvenida = 'Bienvenidos a AteneaIT'

  const styleLi = {
    color : 'red'
  }

  const alertMsg = () => { alert('Hola Mundo!') }



  return (
    <div className="App">
      <div>
        <NavBar />
        <ItemListContainer greeting="Lista de productos: Microprocesadores" />
        <ItemListContainer greeting="Lista de productos: PC armadas" />
        <ItemListContainer greeting="Lista de productos: Placas de video" />
        <ItemListContainer greeting="Lista de productos: Celulares" />
        <ItemListContainer greeting="Lista de productos: Accesorios" />
        <Footer anio='2022'></Footer>
      </div>

    </div>
  );
}

export default App;
