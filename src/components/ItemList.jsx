
import React from 'react'
import {Item} from '../components/Item'


    export const ItemList = ({data}) => {
        return (
        <>
        <section className=' flex flex-wrap justify-center w'>
            {data.map((data)=>(
            <Item 
                key={data.id}
                id={data.id}
                title={data.title}
                cat={data.category}
                price={data.price}
                stock={data.stock}
                image={data.image}
            />
            ))}
        </section>
        </>
        )
    }