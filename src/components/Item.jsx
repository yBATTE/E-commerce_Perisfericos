import React from 'react'
import '../css/item.css'
import { Link } from 'react-router-dom';

export const Item = ({title, price, image, stock, id}) => {

       const num = price;
       let formattedNum = num.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });


return (
       <div class="card">
       <img src= {image}/>
       <p>Title = {title}</p>
       <p>Stock = {stock}</p>
       <h6>precio = {formattedNum} </h6>
       <Link to={`/detail/${id}`}>
              <button type="button" class="btn btn-warning m-1">Detalles</button>
       </Link>
       </div>
)
}

