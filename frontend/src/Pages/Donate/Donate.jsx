import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Donate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic here
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Donate to NAI Tarang</h2>
          <p>
            Your generous donation helps us continue our mission to empower communities through
            education, healthcare, and social initiatives. Thank you for your support!
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter donation amount" required />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message (optional)</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Donate Now
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Other Ways to Donate</h4>
          <ul>
            <li>
              Bank Transfer: Account Name - NAI Tarang NGO, Account Number - XXXXXXXX, Bank -
              XYZ Bank
            </li>
            <li>
              Cheque: Make cheques payable to "NAI Tarang NGO" and mail to 123 NGO Street,
              Cityville, Country.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
