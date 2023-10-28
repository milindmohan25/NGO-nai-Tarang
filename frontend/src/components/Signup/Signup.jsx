import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    // Add your sign-up logic here using the formData
    const {firstName,lastName,email,password}=formData;
    console.log(firstName,lastName,email,password);
  fetch("http://localhost:3030/api/auth/signup", {
  method: "post",
  mode: "cors",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // Remove 'Access-Control-Allow-Origin' from client-side headers
  },
  body: JSON.stringify({
    firstname: formData.firstName,
    lastname: formData.lastName,
    email: formData.email,
    password: formData.password,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    navigate('/login');
    return response.json(); // assuming response is JSON
  })
  .then((data) => {
    console.log('Form submitted:', formData);
    console.log('Server response:', data);
  })
  .catch((error) => console.error('Error during fetch:', error));

    
  };

  return (
    <Form onSubmit={handleSubmit} className='custom-height '>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
