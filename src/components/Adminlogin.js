import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import { userContext } from './MyContext'


const AdminLogin = () => {
  const email = useContext(userContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    
      
        
      
    <Container fluid>
    <Form>
      <h1>Admin Login</h1>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
  </Button>

    </Form>
    </Container>
    
    
  )
}

export default AdminLogin