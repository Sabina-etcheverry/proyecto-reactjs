import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Provider from './context/cartContex';


function App() {
  
  let nombreUsuario= 'X'

  return (
    <Provider>
    <BrowserRouter>
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={nombreUsuario}/>} />
      <Route path='/categorias/:categoria' element={<ItemListContainer greeting={nombreUsuario}/>} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
