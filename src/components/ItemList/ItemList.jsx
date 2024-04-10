/* eslint-disable react/prop-types */
import Item from "../Item/Item";

const ItemList = ({ products, titulo }) => {
  return (
    <div className="d-flex flex-wrap container" >
      <h2 className="min-vw-100">Categoria a mostrar: {titulo}</h2>
      {products.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.img}
          category={prod.category}
          price={prod.price}
          stock={prod.stock}
        />
      ))}
    </div>
  );
};
export default ItemList;
