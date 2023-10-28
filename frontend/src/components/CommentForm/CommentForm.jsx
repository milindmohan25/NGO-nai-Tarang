import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [token,setToken]=useState('');
  const {id}=useParams();

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
  },[])
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation if needed

    // Call the onSubmitComment prop to handle submitting the comment
    fetch("http://localhost:3030/api/comments", {
        method: "post",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          // Remove 'Access-Control-Allow-Origin' from client-side headers
        },
        body: JSON.stringify({
          comment:comment,
          postId:id,
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
          // console.log('Form submitted:', postData);
          // location.reload( )
          window.location.reload()
          console.log('Server response:', data);
        })
        .catch((error) => console.error('Error during fetch:', error));

    // Clear the comment input after submission
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="commentTextarea">
        <Form.Label>Write a Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={handleCommentChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
