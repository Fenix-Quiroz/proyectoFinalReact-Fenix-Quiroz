
import { useContext } from 'react'
import styles from './button.module.css'
import { CartContext } from '../../context/CartContext'

const Button = ({ product }) => {
  const { addProduct } = useContext(CartContext)
  
  return (

    <div>
        <button onClick={() => {addProduct(product)}} className={styles.btn}
        >Agregar al carrito</button>
    </div>
  )
}

export default Button