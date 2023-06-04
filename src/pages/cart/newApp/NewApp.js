import React from 'react';
import '../styles/Index.css';
import { useGlobalContext } from '../context/Context';
// components
// import {Navbar } from '../Index';
import { CartContainer } from '../Index';

const NewApp = () => {
    const { loading } = useGlobalContext();
    if(loading) {
        return (
            <div className='loading'>
                <h1>Loading</h1>
            </div>
        )
    }
    return (
        <main>
            {/* <Navbar/> */}
            <CartContainer/>
        </main>
    )
}

export default NewApp;
