import React from 'react';
import '../styles/Index.css';
import { Review } from '../Index';
const ShowCase = () => {
    return (
        <main className='container'>
            <section className='title'>
                <h2>our reviews</h2>
                <div className='underline'></div>
                <Review/>
            </section>
        </main>
    )
}
export default ShowCase;
