import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App"> 

      <NavBar/>

      <body className="App-header">
        <ItemListContainer/>
      </body>

    </div>
  );
}

export default App;

