import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { useDispatch} from "react-redux";
import { storeToken } from '../../utils/userslice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( "email" , email , password )
    //
    fetch("http://localhost:3030/api/auth/login", {
     method: "post",
      mode: "cors",
     headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // Remove 'Access-Control-Allow-Origin' from client-side headers
  },
  body: JSON.stringify({
   email:email,
   password:password,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // assuming response is JSON
  })
  .then((data) => {
     dispatch(storeToken(data.token));
     localStorage.setItem('token',data.token);
     window.location.reload( )

  })
  .catch((error) => console.error('Error during fetch:', error));
   console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container className='custom-height'>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
