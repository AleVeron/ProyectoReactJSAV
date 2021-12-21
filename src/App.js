import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext';




function App() {
  

  return (
    <div className="App"> 

      <CartContextProvider>

      <BrowserRouter>

      <NavBar/>


      <Switch>

      <Route exact path="/">
      <ItemListContainer greeting="Hola!, Bienvenido a mi proyecto de React"/>
      </Route>

      <Route exact path='/cart'>
      <Cart/>
      </Route>

      <Route exact path="/categoria/:categoriaId">
      <ItemListContainer greeting="Hola! Bienvenido a mi proyecto de React"/>
      </Route>

      <Route exact path="/detail/:paramId">
      <ItemDetailContainer/>
      </Route>

      </Switch>

      </BrowserRouter>

      </CartContextProvider>

    </div>
  );
}

export default App;

