import React from "react";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";

export const App = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
        <Routes>
        <Route path="/" element = {<ItemListContainer />}></Route>
        <Route path="/categoria/:categoria" element ={<ItemListContainer classname= "h-auto" />} />
        <Route path='/cart' element={<Cart />}/>
        </Routes>
        </BrowserRouter>
    )
    }
export default App; 