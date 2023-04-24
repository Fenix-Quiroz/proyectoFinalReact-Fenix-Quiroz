import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({cartIcon}) => {
  const { products } = useContext(CartContext)
  return (                                                                                                                                                                
    <>
    <div className="cart-widget">
      <Link to="/cart-products">
        <img className="cart-widget__icon" src={cartIcon} alt="Icon cart" />
      </Link>
      <p className="cart-widget__notification">{products.length}</p>
      </div>
    </>
  )
}

export default CartWidget