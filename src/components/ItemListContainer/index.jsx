import { useEffect, useState } from "react";
import CardProduct from "../CardProduct";
import CategoresRuta from "../CategoriesRuta/index.";
import db from "../../../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const itemsReference = collection(db, "items");
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getItems = async () => {
      const itemsCollection = await getDocs(itemsReference);
      const items = itemsCollection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      if (categoryName) {
        setItems(items.filter((item) => item.category === categoryName));
      } else {
        setItems(items);
        setLoading(false);
      }
    };

    getItems();
  }, [categoryName]);
  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <CategoresRuta products={items} />
      <div className="flex justify-center gap-6 flex-wrap mt-9">
        {items.map((item) => (
          <CardProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
