// sedear la db
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "../data/data.json" assert { type: "json" };

const itemsReference = collection(db, "items");

const promises = products.map((product) => addDoc(itemsReference, product));

Promise.all(promises).then(() => {
  console.log("cargado");
  process.exit(0);
});