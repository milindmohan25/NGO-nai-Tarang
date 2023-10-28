import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 " >
      <Container>
        <Row>
          <Col md={4}>
            <h5>NAI Tarang NGO</h5>
            <p>
              Empowering communities through education and social initiatives.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Address: 123 NGO Street, Cityville, Country
              <br />
              Email: info@naitarangngo.org
              <br />
              Phone: +123 456 789
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="custom-link">About Us</a>
              </li>
              <li>
                <a href="/projects" className="custom-link">Our Projects</a>
              </li>
              <li>
                <a href="/donate" className="custom-link">Donate</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
