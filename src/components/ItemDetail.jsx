const ItemDetail = ({ nombre, valor, stock}) => {
return(
    <div>
        <h1>Title = {nombre}</h1>
        <p>Stock = {stock}</p>
        <h6>precio = {valor}</h6>
    </div>
);
};

export default ItemDetail;