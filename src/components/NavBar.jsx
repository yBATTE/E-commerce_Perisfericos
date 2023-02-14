import React from 'react'
import '../css/navbar.css'
import '../components/CartWidget'
import CartWidget from '../components/CartWidget'
import { Input } from '@chakra-ui/react'
export const NavBar = () =>{
    return( 
<div className='__alinear'>
            <div className='__search'><Input htmlSize={25} width='auto'  placeholder='Search'
    _placeholder={{ opacity: 1, color: 'black' }}/></div>
            <div className='__logo'>Tienda de Computadoras</div>
            <div><CartWidget/></div>
</div>
    )
}

export default NavBar;