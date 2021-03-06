import { faUser, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {

    const [user] = useAuthState(auth);
  
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="primary" className='text-light' variant="light">
<Container>
    <Navbar.Brand href="#home">
        <img src={logo} height="30" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="header mx-auto my-2 my-lg-0 text-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Link to="/home">Home</Link>
            <Link to="/experts">Experts</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/login">Login</Link> */}
            {user ?
                <a onClick={handleSignOut} ><FontAwesomeIcon style={{paddingRight: "5px"}} icon={faUser}></FontAwesomeIcon>Sign Out</a>
                :
                <Link to="/login"><FontAwesomeIcon style={{paddingRight: "5px"}} icon={faUserAltSlash}></FontAwesomeIcon>Login</Link>
            }

        </Nav>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="danger">Search</Button>
        </Form>
    </Navbar.Collapse>
</Container>
</Navbar>
        </>
    );
};

export default Navbar;
