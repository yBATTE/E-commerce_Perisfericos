import React from 'react'
import '../css/navbar.css'
import '../components/CartWidget'
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom'
import { ItemListContainer } from '../containers/ItemListContainer'
export const NavBar = () =>{
    return( 
        <>
        <div className='__columna'>
<div className='__background__color'>
        <div className='__alinear'>
            <Link to ={'/'} className='__logo'>Tienda de Computadoras</Link>
            <Link to={'/cart'}>
                            <CartWidget></CartWidget>
                        </Link>
        </div>
        <div className='__category'>
            <Link to={ `category/${"MotherBoard"}`} >
            <button className="btn btn-secondary m-2">MotherBoard </button>
            </Link>
            <Link to={ `category/${"Cpu"}`} >
            <button className="btn btn-secondary">Cpu </button>
            </Link>
            <Link to={ `category/${"Tarjetas de Video"}`} >
            <button className="btn btn-secondary">Tarjetas de Video </button>
            </Link>
            <Link to={ `category/${"Almacenamiento"}`} >
            <button className="btn btn-secondary">Almacenamiento </button>
            </Link>
            <Link to={ `category/${"Memoria Ram"}`} >
            <button className="btn btn-secondary">Memoria Ram </button>
            </Link>
            <Link to={ `category/${"Gabinetes"}`} >
            <button className="btn btn-secondary">Gabinetes </button>
            </Link>
            <Link to={ `category/${"Perisfericos"}`} >
            <button className="btn btn-secondary">Perisfericos </button>
            </Link>
            <Link to={ `category/${"Fuente de Poder"}`} >
            <button className="btn btn-secondary">Fuente de Poder </button>
            </Link>
        </div>
</div>
</div>
</>
    )
}

export default NavBar;