// info del detail

import { useEffect, useState } from "react";
import products from '../products.json'
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    const getProducts = async () => {
        const response = await fetch (products);
        console.log(products);

        const data = await response.json();

        return data;
    };
    const [product, SetProduct] = useState([]);

    useEffect(() => {
        getProducts().then((product) => SetProduct(product));
    }, []);


return(
    <div>
        {
            products.map((prod) => {
                return(
                    <ItemList key={prod.id} title ={prod.title} price={prod.price} stock={prod.stock} image ={prod.image} />
                )
            })
        }
    </div>
)
};

export default ItemListContainer;