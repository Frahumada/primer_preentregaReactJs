import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null);
    const {productId} = useParams()

    useEffect(() => {

        const docRef = doc(db, "productos", productId)

        getDoc(docRef)
            .then((resp) => {
                setProduct({...resp.data(), id: resp.id})
            })

    },[productId]);
  return (
    <div>

        <ItemDetail {...product} />

    </div>
    
  )

}

export default ItemDetailContainer;