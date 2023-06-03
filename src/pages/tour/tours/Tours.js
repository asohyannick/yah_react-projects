import React from 'react'
import '../style/Index.css';
import { Tour } from '../index';
const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className='title'>
                <h2>our tours</h2>
                <div className='underlube'></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })}
            </div>
        </section>
    );
};

export default Tours
