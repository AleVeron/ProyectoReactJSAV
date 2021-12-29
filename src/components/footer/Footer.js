import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="titulo__footer">future gamers</h2>

      <section className="footer_lista">
        <ul>
          <li className="lista__item">
            <a href="https://www.facebook.com/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook"
                className="item__imagen"
              />
            </a>
          </li>
          <li className="lista__item">
            <a href="https://www.instagram.com/">
              <img
                src="https://www.androidfreeware.net/img2/instagram.jpg"
                alt="Instagram"
                className="item__imagen"
              />
            </a>
          </li>
          <li className="lista__item">
            <a href="https://www.whatsapp.com/?lang=es">
              <img
                src="https://www.androidfreeware.net/img2/whatsapp-messenger.jpg"
                alt="Whatsapp"
                className="item__imagen"
              />
            </a>
          </li>
        </ul>
      </section>

      <p className="footer__p">
        @2021 Todos los Derechos Reservados. Creado por Veron Alejo.
      </p>
      <Link to={"/"} className="footer__inicio">
        Inicio
      </Link>
    </footer>
  );
};

export default Footer;
