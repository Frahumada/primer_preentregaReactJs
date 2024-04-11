import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { carrito, precioCarrito, vaciarCarrito } = useContext(CartContext);

  const vaciar = () => {
    vaciarCarrito();
  };
  return (
    <div className="card m-5 p-2">
      <h1>Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id} className="card p-2 m-1">
          <h2>{prod.name}</h2>
          <h6>Categoria: {prod.category}</h6>
          <p>
            {prod.contador} a $ <b>{prod.price}</b> c/u ---{"$"}
            {prod.price * prod.contador}
          </p>
        </div>
      ))}
      {carrito.length > 0 ? 
        <>
          <h2>PRECIO TOTAL: {precioCarrito}</h2>
          <button className="btn btn-dark m-2" onClick={vaciar}>
            Vaciar
          </button>
        </> :
        <h2>El carrito esta vacio</h2>
      }
    </div>
  );
};

export default Cart;
