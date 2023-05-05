import db from "../../../db/firebase-config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import Button from "../Button";
const CardDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const getItem = async () => {
    const ItemDoc = doc(db, "items", id);
    const item = await getDoc(ItemDoc);
    if (item.exists()) {
      setItem(item.data());
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  if (loading) {
    return (
      <p className="text-2xl text-blue-500 font-semibold text-center pt-[50%]">
        Loading...
      </p>
    );
  }

  return (
    <div className="mt-[100px] bg-slate-400 m-7 p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-3 text-center  text-blue-600">
        {item.title}
      </h3>
      <div className="bg-slate-300 rounded-lg">
        <div className="flex items-center gap-9">
          <img
            className=" h-[530px] rounded-xl"
            src={item.image}
            alt={item.title}
          />
          <div>
            <p className="text-center text-xl font-semibold p-5">
              {item.description}
            </p>
            <p className="text-center text-xl font-bold  mb-4">
              Categoria:{" "}
              <span className="text-2xl font-bold text-blue-700 uppercase">
                {item.category}
              </span>
            </p>
            <p className="text-center text-xl font-semibold mb-6">
              Precio:
              <span className="text-2xl font-bold text-blue-700">
                {" "}
                ${item.price}
              </span>
            </p>
            <Button product={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
