import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Notification from './components/notification/Notification';
import {NotificationContextProvider} from './components/context/NotificationContext'
import Cart from './components/context/Cart'


function App() {
  


  return (
    <div className="App"> 

      <NotificationContextProvider>

      <BrowserRouter>

      <NavBar/>


      <Notification/>

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

      </NotificationContextProvider>

    </div>
  );
}

export default App;

