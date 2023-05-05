import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { products, clearProducts, removeproduct } = useContext(CartContext);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="w-[600px] mt-[80px]">
      <h1 className="text-center text-2xl mb-4 text-bold">Resumen de compra</h1>
      <table className="w-[100%] text-left border-collapse mb-[20px]">
        <thead className="bg-blue-500                                                ">
          <tr>
            <th className="p-[20px] border border-blue-500">Producto</th>
            <th className="p-[20px] border border-blue-500">Cantidad</th>
            <th className="p-[20px] border border-blue-500">Precio</th>
            <th className="p-[20px] border border-blue-500">Subtotal</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product.id}>
            <tr>
              <td className="p-[20px] border border-blue-500 font-bold">
                {product.title}
              </td>
              <td className="p-[20px] border border-blue-500">
                {product.quantity}
              </td>
              <td className="p-[20px] border border-blue-500">
                ${product.price}
              </td>
              <td className="p-[20px] border border-blue-500">
                ${product.price * product.quantity}
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr>
            <td
              className="p-[20px] border border-blue-500 text-2xl font-bold"
              colSpan={3}
            >
              Total a pagar:
            </td>
            <td className="p-[20px] border border-blue-500 text-2xl font-bold text-blue-600">
              ${totalPrice}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 text-2xl font-semibold rounded-lg flex m-auto hover:bg-blue-600"
        onClick={clearProducts}
      >
        Comprar
      </button>
    </div>
  );
};

export default Checkout;
