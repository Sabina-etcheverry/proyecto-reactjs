
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  let nombreUsuario= 'X'
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={nombreUsuario}/>
    </>
  );
}

export default App;
