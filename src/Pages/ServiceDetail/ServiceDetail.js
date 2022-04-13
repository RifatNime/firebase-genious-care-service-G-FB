import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </>
    );
};

export default ServiceDetail;