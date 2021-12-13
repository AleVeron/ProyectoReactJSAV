import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App"> 

      <BrowserRouter>

      <NavBar/>

      <Switch>

      <Route exact path="/">
      <ItemListContainer greeting="Hola!, Bienvenido a mi proyecto de React"/>
      </Route>

      <Route exact path="/categoria/:categoriaId">
      <ItemListContainer greeting="Hola! Bienvenido a mi proyecto de React"/>
      </Route>

      <Route path="/detail/:paramId">
      <ItemDetailContainer/>
      </Route>

      </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;

