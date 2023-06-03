import React from 'react';
import { Routes, Route } from 'react-router-dom';
// importing pages
import { 
    Home,
    About,
    SingleCocktail,
    Error
 } from '../Index';

 // importing components
 import { Navbar } from '../Index';


const ShowApp = () => {
    return (
        <>
             <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </>
    )
}

export default ShowApp
