import React from "react";
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"

export const App = () => {
    return (
        <>
        <div><NavBar /> </div>
        <div><ItemListContainer greeting={'lista'} /></div>
        <div><ItemDetailContainer /></div>
        </>
    )
    }
export default App; 
