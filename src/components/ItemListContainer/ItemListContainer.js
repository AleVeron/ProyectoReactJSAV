import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { getProductos } from '../../services/firebase/firebase'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState();

  useEffect(() => {

    setLoading(true);
    getProductos('categoria', '==', categoriaId).then(productos =>{
      setProductos(productos)
    }).catch(error => {
      console.log(error)
    }).finally(() =>{
      setLoading(false)
    })

    return () => {
      setProductos([]);
    };
  }, [categoriaId]);

  if (loading) {
    return (
      <div className="gif">
        <img
          src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
          alt="cargando"
        ></img>
      </div>
    );
  }

  return (
    <div className="App-header">
      <div className="saludo">{greeting}</div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
