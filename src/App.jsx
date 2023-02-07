import React from "react";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";



    /* 
    export const App = () => {
    
    const [counter, setcounter] = useState(0);

    const suma = () =>{
        setcounter(counter + 1)}
    const reset = () =>{
        setcounter (0)}
        const resta = () =>{
            if(counter <= 0){
                setcounter (0)
            }else
            setcounter (counter - 1)
        }
    

return (
    <>
    <div><NavBar /> </div>
    <div><ItemListContainer /></div>
    <h1>{counter}</h1>
    <button onClick = {suma}>Sumar</button>
    <button onClick = {reset}>Reset</button>
    <button onClick = {resta}>Resta</button>

    </>
)
}
*/
export const App = () => {
    return (
        <>
        <div><NavBar /> </div>
        <div><ItemListContainer /></div>

        </>
    )
    }
export default App; 