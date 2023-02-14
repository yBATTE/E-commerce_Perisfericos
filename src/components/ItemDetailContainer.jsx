import { useEffect, useState } from "react";
import products from '../products.json'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
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
                    <ItemDetail key={prod.id} nombre ={prod.nombre} valor={prod.valor} stock={prod.stock} />
                )
            })
        }
    </div>
)
};

export default ItemDetailContainer;