import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("Productos");
    const categoryId = useParams().id
    const category = useParams().category
    useEffect( ()=> {
        const asynFunctions = categoryId ? getProductsByCategory : getProducts
        asynFunctions(categoryId)
            .then(res => {
                if (category) {
                    setProducts(res.filter((products) => products.category === category));
                    setTitulo(category)
                } else {
                setProducts(res)
                setTitulo("Productos")
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }, [category, categoryId])
    return (
        <>
        <div className="d-flex justify-content-center">
            <h1>{greetings}</h1>
            <ItemList products={products} titulo={titulo}/>
        </div>
        </>
    ) 
}
export default ItemListContainer