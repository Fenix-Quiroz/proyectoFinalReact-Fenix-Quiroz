import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./checkout.css"

const Checkout = () => {
  const { products , clearProducts} = useContext(CartContext);

  const totalPrice = products.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  return (
    <div className='container'>
      <h1>Resumen de compra</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}
              </td>
              {/* <td><img src={product.image} alt={product.title} /></td> */}
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total a pagar:</td>
            <td className='tableTotalPrice'>${totalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <button className='tableButtom' onClick={clearProducts}>Comprar</button>
    </div>
  );
}

export default Checkout;
