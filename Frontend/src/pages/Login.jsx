// src/components/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: auto;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 80%;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #4ccdc3;
`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  padding-left: 30px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #4ccdc3;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 55%;
  transition: color 0.3s ease;
  left: 0.75rem;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #202020;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4ccdc3;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #3ab8af;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;

const LoginLink = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #888;
  a {
    color: #4ccdc3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Validation and Form Component
export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const Navigate=useNavigate()

  const validate = () => {
    let validationErrors = {};
    if (!user.email) {
      validationErrors.email = 'E-mail is required';
    } else if (!user.email.includes('@') || !user.email.endsWith('.com')) {
      validationErrors.email = 'E-mail is invalid';
    }

    if (!user.password) {
      validationErrors.password = 'Password is required';
    } else if (user.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:3000/login', { // Ensure you have the correct endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
        if (response.ok) {
          alert('Login Successful!');
          setErrors({});
          Navigate("/chat")
          
        } else {
          const errorMsg = await response.text();
          setErrors({ form: errorMsg });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign In</Title>

        <InputWrapper>
          <Input
            type="text"
            name="email" // Ensure the name attribute is set
            placeholder="E-mail"
            value={user.email}
            onChange={handleChange} // Pass the function directly
          />
          <Icon><ion-icon name="person-circle-outline"></ion-icon></Icon>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type="password"
            name="password" // Ensure the name attribute is set
            placeholder="Password"
            value={user.password}
            onChange={handleChange} // Pass the function directly
          />
          <Icon><ion-icon name="lock-closed-outline"></ion-icon></Icon>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputWrapper>

        <Button type="submit">Login</Button>

        <LoginLink>
          Don't have an account? <a href="/register">Create account</a>
        </LoginLink>
      </Form>
    </Container>
  );
};
