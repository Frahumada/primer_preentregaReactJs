import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greetings }) => {

  const [products, setProducts] = useState([]);

  const [titulo, setTitulo] = useState("Productos");


  const category = useParams().category;

  useEffect(() => {

    const productosRef = collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q).then((resp) => {
        setProducts (
        resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
      )
      setTitulo(category ? category : "Productos")
    });
  }, [category]);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>{greetings}</h1>
        <ItemList products={products} titulo={titulo} />
      </div>
    </>
  );
};
export default ItemListContainer;
