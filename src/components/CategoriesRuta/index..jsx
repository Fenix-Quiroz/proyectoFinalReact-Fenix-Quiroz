import { Link } from 'react-router-dom'
import './categoriesRuta.css'
const CategoresRuta = ({products}) => {
  return (
    <div className='categories'>
        <Link className='categoriesItems' to="/category/men">      
        <p>Hombres</p>
        </Link>
        <Link className='categoriesItems' to="/category/women">
        <p>Mujeres</p>
        </Link>
        <Link className='categoriesItems' to="/category/jewelery">
        <p>Joyeria</p>
        </Link>
        <Link className='categoriesItems' to="/category/electronics">
        <p>Electronica</p>
        </Link>
    </div>
  )
}

export default CategoresRuta