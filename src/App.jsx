import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import {CartContext } from "./Context/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx";



function App() {

  const [carrito,setCarrito] = useState([]);

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

  const contadorCarrito = ()=> {
    return carrito.reduce((acc, prod) => acc + prod.contador,0)
  }

  const precioCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.contador,0)

  }

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    
    <>
        <BrowserRouter>
        <CartContext.Provider value={{carrito, addToCart, contadorCarrito, precioCarrito, vaciarCarrito}}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos al ItemListConainer"} />
              }
            />
            <Route
              path="/productos"
              element={
                <ItemListContainer greeting={"Bienvenidos al ItemListConainer"} />
              }
            />
            <Route
              path="/productos/:category"
              element={
                <ItemListContainer greeting={"Listado de productos FILTRADOS"} />
              }
            />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            
            <Route path="/carrito" element={<Cart />} />
              
          </Routes>

        </CartContext.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
