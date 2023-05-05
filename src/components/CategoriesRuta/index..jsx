import { Link, NavLink } from "react-router-dom";
const CategoresRuta = () => {
  return (
    <div className="flex mt-[90px] justify-around bg-neutral-400  ">
      <NavLink
        className="p-3 text-xl font-bold   hover:bg-blue-600 hover:transition hover:duration-300 hover:ease-in-out "
        to="/category/camisetas"
      >
        <p>Camisetas</p>
      </NavLink>
      <Link
        className="p-3 text-xl font-bold   hover:bg-blue-600 hover:transition hover:duration-300 hover:ease-in-out active:bg-blue-400"
        to="/category/zapatillas"
      >
        <p>Zapatillas</p>
      </Link>
      <Link
        className="p-3 text-xl font-bold   hover:bg-blue-600 hover:transition hover:duration-300 hover:ease-in-out active:bg-blue-400"
        to="/category/balones"
      >
        <p>Balones de la NBA</p>
      </Link>
      <Link
        className="p-3 text-xl font-bold   hover:bg-blue-600 hover:transition hover:duration-300 hover:ease-in-out active:bg-blue-400"
        to="/category/gorras"
      >
        <p>Gorras NBA</p>
      </Link>
    </div>
  );
};

export default CategoresRuta;
