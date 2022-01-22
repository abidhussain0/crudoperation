import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export default function Navbar_comp() {
    
 
    return (
        <div>
            <Navbar bg="light" expand="lg">

                <Navbar.Brand>React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/list">list</Link></Nav.Link>
                        <Nav.Link ><Link to="/create">create</Link></Nav.Link>
                        <Nav.Link ><Link to="/search">search</Link></Nav.Link>
                        <Nav.Link ><Link to="/update">update</Link></Nav.Link>
                        {
                            localStorage.getItem('login')?
                            <Nav.Link ><Link to="/logout">LogOut</Link></Nav.Link>
                            :
                            <Nav.Link href="#login"><Link to="/login">Login</Link></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
