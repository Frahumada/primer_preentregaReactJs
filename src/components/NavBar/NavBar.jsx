import CartWidget from "../CartWidget/CartWidget.jsx"
const NavBar = () => {
    return (
        <nav>
            <h3>Impresiones</h3>
            <div>
                <button>Libros</button>
                <button>Tarjetas</button>
                <button>Calendarios</button>
                <button>Candy Bar</button>
            </div>
            <CartWidget/>
        </nav>
    )

}

export default NavBar