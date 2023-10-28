import React, { useEffect, useState } from "react";
// import CardComp from '../Card/CardComp'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts when the component mounts
    fetch("http://localhost:3030/api/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the retrieved posts in state
        setPosts(data.posts);
      })
      .catch((error) => console.error("Error during fetch:", error));
  }, []);

  // Divide posts into three arrays for three rows
  //  const firstRowPosts = posts.slice(0, 2);
  //  const secondRowPosts = posts.slice(2,4);
  //  const thirdRowPosts=posts.slice(4);

  return (
    <Container className="custom-height">
      <Row className="mt-4">
        <Col>
          <h2>Our Projects</h2>
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Col md={4} className="mb-4">
            <Link to={`/${post._id}`} className="custom-link">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  {/* Add more details about the project as needed */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
