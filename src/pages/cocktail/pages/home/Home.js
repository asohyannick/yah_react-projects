import React from 'react'
import '../../styles/Index.css';
import { CocktailList } from '../../Index';
import { SearchForm } from '../../Index';

const Home = () => {
    return (
        <div>
            <SearchForm/>
            <CocktailList/>
        </div>
    )
}

export default Home
