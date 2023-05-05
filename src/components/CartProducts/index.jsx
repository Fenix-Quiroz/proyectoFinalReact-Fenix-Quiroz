import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import Checkout from "../Checkout/Checkout";

const CartProducts = () => {
  const { products, changeProductQuantity, removeProduct } =
    useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const aumentar = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 1) + 1,
    });
  };

  return (
    <>
      <div className="mt-[90px] bg-slate-400 flex justify-around  m-7 rounded-xl p-6 min-h-screen ">
        <div className="flex justify-between gap-5 flex-col">
          {products.map((product) => (
            <div
              className="bg-slate-300 p-7 rounded-xl h-[660px]"
              key={product.id}
            >
              <div className="flex justify-end text-4xl pb-4 cursor-pointer">
                <MdDeleteForever
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                />
              </div>
              <h1 className="text-xl text-center mb-3 font-bold text-blue-600">
                {product.title}
              </h1>
              <img
                className="rounded-xl w-[370px] h-[370px] m-auto "
                src={product.image}
                alt={product.title}
              />
              <div className="flex items-center justify-evenly mt-5 mb-5">
                <AiFillMinusCircle
                  className="text-3xl text-blue-700 cursor-pointer"
                  onClick={() =>
                    changeProductQuantity(product.id, product.quantity - 1)
                  }
                />
                <p className="text-4xl">{product.quantity}</p>
                <AiFillPlusSquare
                  className="text-3xl text-blue-700 cursor-pointer"
                  onClick={() =>
                    changeProductQuantity(product.id, product.quantity + 1)
                  }
                />
              </div>

              <p className="text-center text-xl font-extrabold  mb-4">
                Precio:{" "}
                <span className="text-2xl font-bold text-blue-700 uppercase">
                  ${product.price}
                </span>
              </p>
              <p className="text-center text-xl font-bold  mb-4">
                El subtotal es{" "}
                <span className="text-2xl font-bold text-blue-700 uppercase">
                  {" "}
                  ${product.price * product.quantity}
                </span>
              </p>
            </div>
          ))}
        </div>

        <section>
          <Checkout />
        </section>
      </div>
    </>
  );
};

export default CartProducts;
