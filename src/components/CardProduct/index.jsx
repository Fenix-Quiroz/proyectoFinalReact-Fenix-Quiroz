import { Link } from "react-router-dom";

import Button from "../Button";

const CardProduct = ({ product }) => {
  return (
    <div className="w-[350px] h-[470px] bg-slate-400 mb-5 rounded-2xl p-3   hover:shadow-blue-700">
      <h3 className="h-[55px] text-center font-extrabold text-xl tracking-wide">
        {product.title}
      </h3>
      <Link classame="" to={`/products/${product.id}`}>
        <img
          className="mt-4 mb-4 w-[270px] h-[270px]  m-auto rounded-2xl hover:scale-110 hover:transition-1000"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <p className="text-center text-xl font-semibold">
        Precio:
        <span className="text-2xl font-bold text-blue-700">
          {" "}
          ${product.price}
        </span>
      </p>
      <Button product={product} />
    </div>
  );
};

export default CardProduct;
