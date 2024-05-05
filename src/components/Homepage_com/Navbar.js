import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <>
            <Navbar className='p-3' collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#" className="order-lg-first">
                        <img
                            src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/logo_3-removebg-preview.png"
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="https://raiconsultancyservices.com/" className="font-weight-bold">HOME</Nav.Link>
                            <Nav.Link href="https://raiconsultancyservices.com/about-us/" className="font-weight-bold">ABOUT US</Nav.Link>
                            <Nav.Link href="https://raiconsultancyservices.com/features/" className="font-weight-bold">FEATURES</Nav.Link>
                            <Nav.Link href="https://raiconsultancyservices.com/services/" className="font-weight-bold">SERVICES</Nav.Link>
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
