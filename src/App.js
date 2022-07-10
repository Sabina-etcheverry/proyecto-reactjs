
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  let nombreUsuario= 'X'

  const onAdd = () => {
    console.log("click");
  }
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={nombreUsuario}/>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default App;
