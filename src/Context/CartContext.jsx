import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const addToCart = (item, contador) => {
    const itemAdded = { ...item, contador };

    const nuevoCarrito = [...carrito];

    const isOnCart = nuevoCarrito.find((prod) => prod.id === itemAdded.id);

    if (isOnCart) {
      isOnCart.contador += contador;
    } else {
      nuevoCarrito.push(itemAdded);
    }
    setCarrito(nuevoCarrito);
  };

  const contadorCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.contador, 0);
  };

  const precioCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect (() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito])

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        contadorCarrito,
        precioCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
