import cart from "./Assets/cart4.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {

  return (
    <>
      <Link to="/carrito">
        <img src={cart} alt="Imagen carrito" />
      </Link>
    </>
    
  );
};
export default CartWidget;
