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


export const ItemListContainer = ({greeting}) => {
    return (
        <section>
            <p>{greeting}</p>
        </section>
    )
}

export default ItemListContainer