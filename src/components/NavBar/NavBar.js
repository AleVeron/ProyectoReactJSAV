import React from 'react';
import './NavBar.css';
import '../cartWidget/CartWidget';
import CartWidget from '../cartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"; 
import {getCategorias} from "../../productos";
import {useEffect, useState} from 'react';



const NavBar = () =>  {

    const [categorias, setCategorias] = useState([]);
    
    useEffect(() =>{
        getCategorias().then(categorias => {
            setCategorias(categorias);
        })
    },[])
    console.log(categorias)

    return (
        <nav className='nav'>
            <h1 className="titulo">FUTURE GAMERS</h1>
            <div className="botones">
            <Link to={"/"} className="btn btn-primary">Inicio </Link>
            <div className="categorias">
                {categorias.map(cat => <Link key={cat.id} className='btn btn-primary' to={`/categoria/${cat.id}`}>{cat.description}</Link>)}
            </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;