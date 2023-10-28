import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className='custom-height'>
      <Row className="mt-4">
        <Col>
          <h2>About Us</h2>
          <p>
            NAI Tarang NGO is a non-profit organization dedicated to making a positive impact on
            communities through education, healthcare, and various social initiatives.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower communities by providing access to quality education,
            healthcare services, and support for sustainable development.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Our Values</h3>
          <ul>
            <li>Commitment to Education</li>
            <li>Health and Well-being for All</li>
            <li>Community Empowerment</li>
            <li>Sustainable Development</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
