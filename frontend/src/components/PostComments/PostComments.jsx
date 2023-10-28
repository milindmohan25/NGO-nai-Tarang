import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PostComments = () => {
    const [comments,setComments]=useState([]);
    const {id}=useParams();

    useEffect(() => {
        // Fetch all posts when the component mounts
        fetch(`http://localhost:3030/api/comments/post/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Set the retrieved posts in state
            console.log(data);
            setComments(data.comments);
          })
          .catch((error) => console.error('Error during fetch:', error));
      }, []);

  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ListGroup>
          {comments.map((comment) => (
            <ListGroup.Item key={comment._id}>
            {comment.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default PostComments;
