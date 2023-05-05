import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const Button = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          addProduct(product);
        }}
        className="  bg-slate-600 text-xl mt-5 pr-2 pl-2 pt-1 pb-1 rounded-lg cursor-pointer hover:bg-slate-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Button;
