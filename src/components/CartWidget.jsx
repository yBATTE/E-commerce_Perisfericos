import React from 'react'
import '../css/cartwidget.css'
import carrito from '../assets/833314.png'


export const CartWidget = () => {
    return (
            <div className='__carritoimg'>
                <img className='___carritoimg' src={carrito} alt="" />
                <span className='container-cart-products'>6</span>
            </div>
    )
}
export default CartWidget