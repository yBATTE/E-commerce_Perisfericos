import React from 'react'
import Productos from '../products.json'
import {ItemList} from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

    let json = Productos;

const {category} = useParams();

if (category){
    console.log(category);
}

const [products, setProducts] = useState([]);

const mostrarProds =()=>{
    return new Promise((resolve, reject)=>{
        if (json.length === 0  ){
    reject( new Error('No hay productos'))
        } setTimeout(() => {resolve(json)}, 1) 
    });
}

async function fetchData(){
    try{
    const data = await mostrarProds();
    setProducts(data)
    } catch (error){
    console.log(error)
    }
}

useEffect(()=>{
    fetchData()
},[category])


const prodFilter = products.filter((p)=> p.category === category)
return (
    
    <>
    {category ? <ItemList data={prodFilter}/> : <ItemList data={products}/>}
    </>
)
}