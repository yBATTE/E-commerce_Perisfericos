import React from 'react'
import Productos from '../products.json'
import {ItemList} from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

console.log(Productos);

const {category} = useParams();

const [products, setProducts] = useState([]);

const mostrarProds =()=>{
    return new Promise((resolve, reject)=>{
        Productos.length <= 1 ? 
    reject('No hay productos')
    : (() => {resolve(Productos)}) 
    });
}

async function fetchData(){
    try{
    const data = await mostrarProds();
    setProducts(data)
    } catch (err){
    console.log(err)
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