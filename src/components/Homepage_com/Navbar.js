import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <>
            <Navbar className='p-3' collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#" className="order-lg-first">
                        <h1 className="d-inline-block align-top font-weight-bold">
                        <span className='text-primary'>Soft </span>Emerald
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="font-weight-bold">HOME</Nav.Link>
                            <Nav.Link href="/about" className="font-weight-bold">ABOUT US</Nav.Link>
                            <Nav.Link href="/features" className="font-weight-bold">FEATURES</Nav.Link>
                            <Nav.Link href="/services" className="font-weight-bold">SERVICES</Nav.Link>
                            <Button variant="danger" href="#contact" className="btn btn-lg btn-warning mx-5">CONTACT US</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: '70px' }}></div> {/* Adjust padding as needed */}
        </>
    );
};

export default CustomNavbar;
