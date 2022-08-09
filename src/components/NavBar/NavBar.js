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
      setCategorias(categorias);
    });
  }, []);



  return (
    <nav className="nav d-flex justify-content-around align-items-center p-4 flex-column gap-3 flex-lg-row">

      <Link to={"/"} className="" >
        <h1 className="titulo ">FUTURE GAMERS</h1>
      </Link>

      <div className="botones">
        <div className="categorias ">
          {categorias.map((cat) => (
            <Link
              key={cat.id}
              className="btn btn-primary m-2"
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
