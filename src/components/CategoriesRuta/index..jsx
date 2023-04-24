import { Link } from 'react-router-dom'
import './categoriesRuta.css'
const CategoresRuta = () => {
  return (
    <div className='categories'>
        <Link className='categoriesItems' to="/category/camisetas">      
        <p>Camisetas</p>
        </Link>
        <Link className='categoriesItems' to="/category/zapatillas">
        <p>Zapatillas</p>
        </Link>
        <Link className='categoriesItems' to="/category/balones">
        <p>Balones de la NBA</p>
        </Link>
        <Link className='categoriesItems' to="/category/gorras">
        <p>Gorras NBA</p>
        </Link>
    </div>
  )
}

export default CategoresRuta