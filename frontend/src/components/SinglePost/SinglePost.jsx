import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PostComments from '../PostComments/PostComments';

const SinglePost = () => {
    const [post,setPost]=useState({});
    const { id } = useParams();
    useEffect(() => {
        // Fetch all posts when the component mounts
        fetch(`http://localhost:3030/api/posts/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Set the retrieved posts in state
            console.log(data);
            setPost(data.post);
          })
          .catch((error) => console.error('Error during fetch:', error));
      }, []);
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Text>{post.body}</Card.Text>
        <Card.Text>Tags: {post.tags}</Card.Text>
        {/* Add other post details here */}
      </Card.Body>
      <PostComments/>
    </Card>
  );
};

export default SinglePost;
