import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service shadow border-0'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <a className='btn btn-primary' variant="outline-primary">Book: {name}</a>
        </div>
    );
};

export default Service;