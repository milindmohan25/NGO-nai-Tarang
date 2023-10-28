import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
 
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, please feel free to reach out to us using the
            form below.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Visit Us</h4>
          <p>
            123 NGO Street
            <br />
            Cityville, Country
          </p>
          <h4>Email</h4>
          <p>info@naitarangngo.org</p>
          <h4>Phone</h4>
          <p>+123 456 789</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
