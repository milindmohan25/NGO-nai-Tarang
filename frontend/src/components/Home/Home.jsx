import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import p1 from '../../assests/images/p1.jpeg'
import p2 from '../../assests/images/p2.jpeg'
import p3 from '../../assests/images/p3.jpeg'
import p4 from '../../assests/images/p4.jpeg'
import p5 from '../../assests/images/p5.jpeg'
import p6 from '../../assests/images/p6.jpeg'

const Home = () => {
  return (
    <div>
      <div className="container-fluid text-sm-center p-5 bg-light">
        <h1>Welcome to NAI Tarang NGO</h1>
        <p>
          Empowering communities through education, healthcare, and social
          initiatives.
        </p>
      </div>

      <Container>
        <Row className="mb-4">
          <Col>
            <h2>Our Mission</h2>
            <p>
              At NAI Tarang, we strive to make a positive impact on communities
              by providing education, healthcare, and support for sustainable
              development.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Featured Projects</h2>
            <Carousel >
              {/* Add carousel items with featured project details */}
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p1}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>NGO-"Empowering people to create a better future."</h3>
                  <p> Nai Tarang - Pioneering Positive Change, One Community at a Time</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p2}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>Nurturing Bodies and Minds for a Brighter Future</h3>
                  <p>Holistic Well-being: Nai Tarang's Comprehensive Approach to Health</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p3}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>Unlocking Potential, One Mind at a Time</h3>
                  <p>Elevating Education: Nai Tarang's Commitment to Providing Advanced Learning Opportunities for the Needy</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p4}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>Ensuring Nutritional Security for Needy Families</h3>
                  <p>Nourishing Communities: [Nai Tarang]'s Commitment to Providing Healthy Food for All</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p5}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>Cultivating Sustainability for a Thriving Planet</h3>
                  <p>Greening the Future: Nai Tarang's Pioneering Efforts in Environmental Protection</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={p6}
                  alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                  <h3>Project 1</h3>
                  <p>Description of the first featured project.</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel.Item for other projects */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
