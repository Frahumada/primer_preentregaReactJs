import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Item = ({id, name, img, category, price, stock}) => {
  return (
    <article className="d-flex align-content-stretch flex-wrap">
      <div className="card my-2 mx-2 bg-danger d-flex flex-column justify-content-between p-3 ">
        <h1 className="align-self-center pt-2 mb-0">{name}</h1>
        <img src={img} className="card-img-top align-self-center container-fluid" alt="UNA IMAGEN" style={{height:300, width: 400, margin:0 }}  />
        <p className="px-5 align-self-center">Categoria: {category}</p>
        <h1 className="px-5 align-self-center">$ {price}</h1>
        <h6>Stock: {stock}</h6>
          <Link to={`/detail/${id}`} className="btn btn-secondary mx-5 mb-2">Ver Detalle</Link>
      </div>
    </article>
  );
};
export default Item;