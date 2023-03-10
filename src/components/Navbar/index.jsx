
import CartWidget from "../CartWidget";
import "./Navbar.css";
const Navbar = ({}) => {
  return (
    <div className="header">
      <div className="header__logo">
        <p>LOGO</p>
      </div>
      <div className="navbar">
        <ul className="navbar__items">
          <li className="navbar__item"><a href="#">Inicio</a></li>
          <li className="navbar__item"><a href="#">Productos</a></li>
          <li className="navbar__item"><a href="#">¿Qué somos?</a></li>
          <li className="navbar__item"><a href="#">Contacto</a></li>
        </ul>
        <CartWidget cartIcon="https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
      </div>
    </div>
  );
};

export default Navbar;
