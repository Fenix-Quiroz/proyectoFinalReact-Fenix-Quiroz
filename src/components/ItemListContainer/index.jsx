import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../CardProduct";
import CategoresRuta from "../CategoriesRuta/index.";
import api from "../../api";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const   { categotyName } = useParams();

  useEffect(() => {
    const getProducts = async () => {   
      const products = await api.getProducts()
      if (categotyName) {
        setProducts(products.filter((product) => product.category === categotyName));
      } else {
        setProducts(products);
      }
    };

    getProducts();
  }, [categotyName]);
  return (
    <div>
      <CategoresRuta products={products}/>
        {products.map((product) => (
          <CardProduct key={product.id} product={product}/>
        ))}
    </div>
  ) 
}

export default ItemListContainer