import React from 'react'
import { Link } from 'react-router-dom'
import '../css/itemdetail.css'

export const ItemDetail = ({product}) => {



return (
    

<div class="card-body1">
<picture className='m-2 opacity-100 w-3/4 flex justify-center'>
        <img src={product.image} className=' h-56'/>
        </picture>
<h5 class="card1-title1">{product.title}</h5>
    <p class="card1-text1">{product.description}</p>
    <p class="card1-text1">{product.price}</p>
        
        <Link to='/cart'>
        <button className='btn btn-outline-success m-1'> Añadir al carrito </button>
        </Link>
        <Link to='/'>
        <button className='btn btn-outline-secondary m-1'> Volver a inicio </button>
        </Link>
</div>


)
}