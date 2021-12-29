import React from "react";
import "./NavBar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "categorias")).then((querySnapshot) => {
      const categorias = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(categorias);
      setCategorias(categorias);
    });
  }, []);

  

  return (
    <nav className="nav">
      <h1 className="titulo">FUTURE GAMERS</h1>
      <div className="botones">
        <Link to={"/"} className="btn btn-primary">
          Inicio{" "}
        </Link>
        <div className="categorias">
          {categorias.map((cat) => (
            <Link
              key={cat.id}
              className="btn btn-primary"
              to={`/categoria/${cat.id}`}
            >
              {cat.description}
            </Link>
          ))}
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
