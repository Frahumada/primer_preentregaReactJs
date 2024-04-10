import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import cart from "./Assets/cart4.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {contadorCarrito} = useContext(CartContext);
  return (
    <>
      <Link to="/carrito">
        <img src={cart} alt="Imagen carrito" />
        <span className="contadorCarrito btn btn-dark">- {contadorCarrito} -</span>
      </Link>
    </>
    
  );
};
export default CartWidget;
