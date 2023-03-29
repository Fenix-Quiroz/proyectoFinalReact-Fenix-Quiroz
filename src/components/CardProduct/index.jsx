import { Link } from 'react-router-dom'
import styles from './cardProduct.module.css'
const CardProduct = ({product}) => {
  return (
    <Link className={styles.cardsProducts} to={`/products/${product.id}`} >
    <div className={styles.cardsContainer}>
        <h3 className={styles.cardsTitle }>{product.title}</h3>
        <img className={styles.cardsImg} src={product.image} alt={product.title} />
        <p className={styles.cardsPrice}> $ {product.price}</p>
    </div>
    </Link>
  )
}

export default CardProduct