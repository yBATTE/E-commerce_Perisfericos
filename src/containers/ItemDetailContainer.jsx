import React, { useEffect } from 'react'
import Products from '../products.json'
import { ItemDetail } from '../components/ItemDetail';
import { useState } from 'react'
import { useParams } from 'react-router';


export const ItemDetailContainer = () => {

const {id} = useParams()

const [product, setProduct] = useState([]);


let json = Products;

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
    setProduct(data.find((item)=> item.id === parseInt(id)))
    } catch (err){
    console.log(err)
    }
}
useEffect(()=>{
    fetchData()
},[id])

return (
    <>
    <ItemDetail product={product}/>
    </> 
)
}