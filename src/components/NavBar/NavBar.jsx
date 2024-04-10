import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { CartContext } from "../../Context/CartContext.jsx";
import { useContext } from "react";

const NavBar = () => {
  const user = useContext(CartContext);
  console.log(user);
  return (
    <div className="w-100">
       <nav className="w-100 navbar navbar-dark bg-danger align-items-center justify-content-center">
      <h3>Una tienda de todo</h3>
            <div className="align-items-center">
            <Link to={`/productos`} className="btn btn-dark m-1">Productos</Link>
            <Link to={`/productos/libros`} className="btn btn-dark m-1">Libros</Link>
            <Link to={`/productos/peliculas`} className="btn btn-dark m-1">Peliculas</Link>
            <Link to={`/productos/musica`} className="btn btn-dark m-1">Musica</Link>
            <Link to={`/productos/otro`} className="btn btn-dark m-1">Otro</Link>
            </div>
            <CartWidget />
    </nav> 
    </div>
    
  );
};

export default NavBar;
