import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

const CartWidget = ({ cartIcon }) => {
  const { products } = useContext(CartContext);
  return (
    <>
      <div className="relative">
        <Link to="/cart-products">
          <div className=" p-2 hover:bg-neutral-200 hover:rounded-full">
            <img className="w-10  " src={cartIcon} alt="Icon cart" />
          </div>
        </Link>
        <p className=" absolute bottom-8 bg-slate-500 pr-1 pl-1 rounded-full  left-6 text-center font-extrabold text-blue-500">
          {products.length}
        </p>
      </div>
    </>
  );
};

export default CartWidget;
