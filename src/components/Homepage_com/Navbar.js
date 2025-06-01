import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';

const CustomNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send form data to backend
        console.log('Form submitted:', formData);
        // Close modal after form submission
        setShowModal(false);
        // Redirect to the content for the mailbox
        window.location.href = '/mailbox'; // Replace '/mailbox' with the actual route
    };

    return (
        <>
            <Navbar className='p-3' collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#" className="order-lg-first">
                        <h1 className="d-inline-block align-top font-weight-bold">
                        <span className='text-primary'>Rai </span>Consultancy <span className='text-primary'>Services</span>
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="font-weight-bold">HOME</Nav.Link>
                            <Nav.Link href="/about" className="font-weight-bold">ABOUT US</Nav.Link>
                            <Nav.Link href="/features" className="font-weight-bold">FEATURES</Nav.Link>
                            <Nav.Link href="/services" className="font-weight-bold">SERVICES</Nav.Link>
                            <Button variant="danger" onClick={() => setShowModal(true)} className="btn btn-lg btn-warning mx-5">CONTACT US</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: '70px' }}></div> {/* Adjust padding as needed */}

            {/* Modal for the contact form */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={formData.message} onChange={handleInputChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CustomNavbar;
