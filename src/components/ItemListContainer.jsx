import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import '../css/itemlist.css'


export const ItemListContainer = () => {
    return (
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
    )
}

export default ItemListContainer