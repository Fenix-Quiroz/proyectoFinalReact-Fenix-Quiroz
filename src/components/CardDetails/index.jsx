
import db from "../../../db/firebase-config"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cardDetails.css";
import { doc, getDoc } from "firebase/firestore";
import Button from "../Button";
const CardDetails = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const getItem = async () => {
    const ItemDoc = doc( db , "items" , id);
    const item = await getDoc(ItemDoc)
    if (item.exists()) {
      setItem(item.data())
      setLoading(false)
    }
  }

  useEffect(() => {
    getItem()
  }, [])
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="details">
        <h3 className="detailsTitle">{item.title}</h3>
        <img className="detailsImg" src={item.image} alt={item.title} />
        <p className="detailsPrice">Precio: $ {item.price}</p>
        <p className="detailsDescription">{item.description}</p>
        <p className="detailsCategory">Categoria: <span className="detailsSpan">{item.category}</span></p> 
        <Button/>
    </div>
  )
}

export default CardDetails