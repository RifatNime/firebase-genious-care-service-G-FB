import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {

    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
/* -------------------------------- 1no ---------------------------------------- */
    const navigateToServiceDetail = id => {
        navigate(`sevice/${id}`)

    }
    return (
        <div className='service shadow border-0'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <a onClick={() => navigateToServiceDetail(id)} className='btn btn-primary' variant="outline-primary">Book: {name}</a>
            {/* id pass korte hoe */}
        </div>
    );
};

export default Service;