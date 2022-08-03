import React from "react";
import ItemDetail from "./ItemDetail";
import "./itemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { paramId } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "items", paramId))
      .then((querySnapshot) => {
        const producto = { id: querySnapshot.id, ...querySnapshot.data() };
        setProducto(producto);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProducto();
    };
  }, [paramId]);

  console.log("hola!");

  return (
    <div className="itemDetailContainer">
      {loading ? (
        <div className="gif">
          <img
            src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
            alt="cargando"
          ></img>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
