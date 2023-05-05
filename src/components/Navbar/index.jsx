import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const Navbar = ({}) => {
  return (
    <div className="relative">
      <div className=" flex justify-between items-center bg-neutral-800 p-3 fixed top-0 left-0 right-0">
        <Link to="/home" className=" text-4xl">
          <div>
            <p className="text-red-600 font-bold tracking-wider">
              NBA<span className=" text-blue-700 tracking-tight">store</span>
            </p>
          </div>
        </Link>
        <div className=" bg-slate-400 rounded-lg pr-4">
          <ul className="flex justify-between items-center gap-8 text-xl ">
            <Link
              to="/home"
              className="p-4 text-2xl  hover:bg-neutral-300 rounded-lg "
            >
              <li>Inicio</li>
            </Link>
            <Link
              to="/products"
              className="p-4 text-2xl  hover:bg-neutral-300 rounded-lg"
            >
              <li> Productos</li>
            </Link>
            <CartWidget cartIcon="https://cdn-icons-png.flaticon.com/512/107/107831.png" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
