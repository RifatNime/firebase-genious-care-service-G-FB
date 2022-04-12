import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className='footer p-3'>
            <p>copyright<small> &copy; since 2015-{new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;