import imagen from '../imagenes/Screenshot_6.jpg'

const ItemList = ({ title, price, stock,image}) => {
    
    const num = price;
    let formattedNum = num.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });


    
    return(
        <div class="card">
        <img src= {image}/>
        <p>Title = {title}</p>
        <p>Stock = {stock}</p>
        <h6>precio = {formattedNum} </h6>
        <button class="add-to-cart">Agregar al carrito</button>
        </div>
        
    );
}

    export default ItemList;



