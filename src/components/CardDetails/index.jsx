
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cardDetails.css";

const CardDetails = () => {
     const [products, setProducts] = useState({});
     const { id } = useParams();
     const getProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            
        }
     };
    
     useEffect(() => {
       getProducts();
     }, [])
     

  return (
    <div className="details">
        <h3 className="detailsTitle">{products.title}</h3>
        <img className="detailsImg" src={products.image} alt={products.title} />
        <p className="detailsPrice">$ {products.price}</p>
        <p className="detailsDescription">{products.description}</p>
        <p className="detailsCategory">Categoria: <span className="detailsSpan">{products.category}</span></p>
    </div>
  )
}

export default CardDetails