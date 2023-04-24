
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import styles from "./navbar.module.css";
import CardProduct from "../CardProduct";
const Navbar = ({}) => {
  return (
    <>
    <div className={styles.header}>
      <Link to="/home" className={styles.header__logo}>
      <div >
        <p className={styles.logo}>NBA<span className={styles.spanLogo}>store</span></p>
      </div>
      </Link>
      <div className={styles.navbar}>
        <ul className={styles.navbar__items}>
          <Link to="/home" className={styles.navbar__item}>
          <li >Inicio</li>
          </Link>
          <Link to="/products" className={styles.navbar__item}>
          <li > Productos</li>
          </Link>
        </ul>
        <CartWidget  cartIcon="https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;
