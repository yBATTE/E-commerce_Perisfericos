import React from 'react'
import '../css/navbar.css'
import '../components/CartWidget'
import CartWidget from '../components/CartWidget'
import { Input,Menu,MenuButton,MenuList,MenuItem,Button, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import '../css/itemlist.css'
export const NavBar = () =>{
    return( 
        <>
<div className='__alinear'>
            <div className='__search'><Input htmlSize={25} width='auto'  placeholder='Search'
    _placeholder={{ opacity: 1, color: 'black' }}/></div>
            <div className='__logo'>Tienda de Computadoras</div>
            <div><CartWidget/></div>
</div>
<div class= "__menu"><Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorias
    </MenuButton>
    <MenuList>
    <MenuItem>MotherBoard</MenuItem>
    <MenuItem>Cpu</MenuItem>
    <MenuItem>Tarjetas de Video</MenuItem>
    <MenuItem>Almacenamiento</MenuItem>
    <MenuItem>Memoria Ram</MenuItem>
    <MenuItem>Gabinetes</MenuItem>
    <MenuItem>Perisfericos</MenuItem>
    <MenuItem>Fuentes De Poder</MenuItem>
    </MenuList>
</Menu></div>
</>
    )
}

export default NavBar;