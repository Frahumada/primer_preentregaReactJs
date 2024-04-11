import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
  const item = {
    id: id,
    name: name,
    img: img,
    category: category,
    price: price,
    description: description,
    stock: stock,
  };

  return (
    <article className="card my-2 mx-2 d-flex flex-wrap">
      <h1 className="w-100">{name}</h1>
      <img src={img} alt="" style={{ width: 200 }} />
      <p>Categoria: {category}</p>
      <p>{description}</p>
      <h1>$ {price}</h1>
      <h6>Stock: {stock}</h6>
      <ItemCount stock={stock} item={item} />
    </article>
  );
};

export default ItemDetail;
