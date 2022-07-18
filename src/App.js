import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail';
import {BrowserRouter , Routes , Route} from 'react-router-dom';


function App() {
  
  let nombreUsuario= 'X'

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={nombreUsuario}/>} />
      <Route path='/categorias/:categoria' element={<ItemListContainer greeting={nombreUsuario}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
    </>
    </BrowserRouter>
    
  );
}

export default App;
