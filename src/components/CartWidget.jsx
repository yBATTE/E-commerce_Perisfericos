
import React from 'react'
import '../css/cartwidget.css'
import carrito from '../imagenes/833314.png'


export const CartWidget = () => {
    return (
            <div className='__carritoimg'>
                <span className='container-cart-products'>6</span>
                <img className='___carritoimg' src={carrito} alt="" />
            </div>
    )
}
export default CartWidget