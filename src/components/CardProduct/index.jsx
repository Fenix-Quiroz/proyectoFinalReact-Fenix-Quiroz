import { Link } from 'react-router-dom'
import styles from './cardProduct.module.css'
import Button from '../Button'

const CardProduct = ({product}) => {
   
  return (
      
      <div className={styles.cardsContainer}>
      <Link className={styles.cardsProducts} to={`/products/${product.id}`} >
          <h3 className={styles.cardsTitle }>{product.title}</h3>
          <img className={styles.cardsImg} src={product.image} alt={product.title} />
      </Link>
          <p className={styles.cardsPrice}> $ {product.price}</p>
      <Button product={product}/>
      </div>
    
  )
}

export default CardProduct