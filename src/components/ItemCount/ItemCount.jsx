import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Contador = ({ initial = 1, stock, item }) => {
  const [contador, setContador] = useState(initial);

  const { carrito, addToCart } = useContext(CartContext);
  console.log(carrito);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap w-25 justify-content-between">
        <button className="btn btn-dark" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <h2 className="px-5">{contador}</h2>
        <button className="btn btn-dark" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
        <button className="btn btn-dark w-100 my-3" onClick={()=>{addToCart(item,contador)}}>
          Añadir al carrito
        </button>
      </div>
    </>
  );
};
export default Contador;
