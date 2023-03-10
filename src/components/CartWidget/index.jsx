import './CartWidget.css'

const CartWidget = ({cartIcon}) => {
  return (
    <div className="cart-widget">
          <img className="cart-widget__icon" src={cartIcon} alt="Icon cart" />
          <p className="cart-widget__notification">3</p>
        </div>
  )
}

export default CartWidget