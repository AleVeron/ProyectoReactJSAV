import './NavBar.css';
import '../CartWidget/CartWidget';
import CartWidget from '../CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () =>  {
    return (
        <nav className='nav'>
            <h1 className="titulo">FUTURE GAMERS</h1>
            <div className="botones">
            <button className="btn btn-primary">Monitores</button>
            <button className="btn btn-primary">Gabinetes</button>
            <button className="btn btn-primary">Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;