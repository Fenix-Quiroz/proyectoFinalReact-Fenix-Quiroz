import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./cartProducts.css";
import { Link } from 'react-router-dom';
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import Checkout from '../Checkout/Checkout';

const CartProducts = () => {
    const { products, changeProductQuantity } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    const aumentar = (productId) => {
      setQuantities({
        ...quantities,
        [productId]: (quantities[productId] || 1) + 1,
      });
    };

  return (
    <main>

    <div className='mainContainer'>
      <div className='containerProduct'>

      {products.map((product) => (
        
        <div className='cartProduct' key={product.id}>
          <div className='cartProductsDetails'>
          <h1 className='cartProductsTitle'>{product.title}</h1>
          <img className='cartProductImage' src={product.image} alt={product.title} />
          <div className='cartProductsButtons'>
          <AiFillMinusCircle className='cartProductsMinus' onClick={() => changeProductQuantity(product.id, product.quantity - 1)}/>
          <p className='cartProductQuantity'>{ product.quantity }</p>
          <AiFillPlusSquare className='cartProductsPlus' onClick={() => changeProductQuantity(product.id, product.quantity + 1)}/>
          </div>
          </div>

          <p className='cartProductPrice'>Precio: ${product.price}</p>
          <p className='cartProductTotalPrice'>El subtotal es {product.price * product.quantity}</p>
        </div>
      ))}
      </div>
      <section>
        <Checkout/>
      </section>
      
    </div>
      </main>
  );
}

export default CartProducts;
