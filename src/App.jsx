import React from "react";
import NavBar from "./components/NavBar"
import {ItemListContainer} from "./containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./components/Cart";

export const App = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
        <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
        </BrowserRouter>
    )
    }
export default App; 