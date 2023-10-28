import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    tags: '',
    body: '',
  });

  //  const token = useSelector(store=>store.user.token) | localStorage.getItem( "token");
  const token =  localStorage.getItem( "token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your post creation logic here
    console.log(token , "this is the token");
    fetch("http://localhost:3030/api/posts", {
        method: "post",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          // Remove 'Access-Control-Allow-Origin' from client-side headers
        },
        body: JSON.stringify({
          title:postData.title,
          description:postData.description,
          tags:postData.tags,
          body:postData.body,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        //   navigate('/login');
          return response.json(); // assuming response is JSON
        })
        .then((data) => {
          console.log('Form submitted:', postData);
          console.log('Server response:', data);
        })
        .catch((error) => console.error('Error during fetch:', error));
    console.log('Post Data:', postData);
    // Reset form fields or navigate to another page if needed
  };

  return (
    <Container >
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPostTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPostDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={postData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPostTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                value={postData.tags}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPostBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="body"
                value={postData.body}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;
