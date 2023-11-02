import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route,Link,NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container className="header">
            <Navbar.Brand href="/" className="logo">ELECTRONIC<span className="logosp">.GALLERY</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/posts">Posts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header